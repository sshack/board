import { useCallback, useState, useRef } from 'react';
import { useTexture } from '../../hooks/useTexture';
import { useDrag } from '../../contexts/DragContext';
import { useGameData } from '../../hooks/useGameData';

interface CharacterPosition {
  x: number;
  y: number;
}

export default function CharacterLayer() {
  const { characters, currentMap, updateCharacter } = useGameData();

  const { texture: mapTexture } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );
  const { startCharacterDrag, stopCharacterDrag } = useDrag();

  // State to track the character currently being placed (dragged)
  const [draggingCharacterId, setDraggingCharacterId] = useState<string | null>(
    null
  );

  // Keep previous position so we can revert if placed out of bounds
  const previousPosition = useRef<Record<string, CharacterPosition>>({});

  const GRID_SIZE = currentMap?.gridSize || 64;

  // Helper to constrain position inside the map
  const constrainPosition = useCallback(
    (pos: CharacterPosition): CharacterPosition => {
      if (!mapTexture) return pos; // texture not ready yet

      const x = Math.max(0, Math.min(mapTexture!.width - GRID_SIZE, pos.x));
      const y = Math.max(0, Math.min(mapTexture!.height - GRID_SIZE, pos.y));
      return { x, y };
    },
    [mapTexture, GRID_SIZE]
  );

  // ---------------------------------------------------------------------
  // Pointer handlers
  // ---------------------------------------------------------------------
  const handleCharacterPointerDown = useCallback(
    (event: any, characterId: string) => {
      event.stopPropagation();
      event.stopImmediatePropagation();

      const char = characters.find((c) => c.id === characterId);
      if (!char) return;

      previousPosition.current[characterId] = { x: char.x, y: char.y };
      setDraggingCharacterId(characterId);
      startCharacterDrag();
    },
    [characters, startCharacterDrag]
  );

  const handleGlobalPointerMove = useCallback(
    (event: any) => {
      if (!draggingCharacterId) return;

      const local = event.data.getLocalPosition(event.currentTarget);
    },
    [draggingCharacterId]
  );

  const handleGlobalPointerUp = useCallback(
    (event: any) => {
      if (!draggingCharacterId) return;

      event.stopPropagation();
      event.stopImmediatePropagation();

      const local = event.data.getLocalPosition(event.currentTarget);

      // Snap to grid
      const gridX = Math.floor(local.x / GRID_SIZE) * GRID_SIZE;
      const gridY = Math.floor(local.y / GRID_SIZE) * GRID_SIZE;

      const isWithinBounds =
        gridX >= 0 &&
        gridX <= mapTexture!.width - GRID_SIZE &&
        gridY >= 0 &&
        gridY <= mapTexture!.height - GRID_SIZE;

      const char = characters.find((c) => c.id === draggingCharacterId);
      if (!char) return;

      if (isWithinBounds) {
        const newPos = constrainPosition({ x: gridX, y: gridY });
        updateCharacter({ ...char, x: newPos.x, y: newPos.y });
      } else {
        // Revert to previous position
        const prev = previousPosition.current[draggingCharacterId];
        if (prev) {
          updateCharacter({ ...char, x: prev.x, y: prev.y });
        }
      }

      setDraggingCharacterId(null);
      stopCharacterDrag();
    },
    [
      draggingCharacterId,
      characters,
      GRID_SIZE,
      mapTexture,
      constrainPosition,
      updateCharacter,
      stopCharacterDrag,
    ]
  );

  // ---------------------------------------------------------------------
  // Sub-component to render each character sprite. Declared inside the
  // component so it has access to shared callbacks but ensures we respect
  // the React Hooks rules (hooks are called at the top level of the
  // component tree of each instance, not within loops).
  // ---------------------------------------------------------------------
  const CharacterSprite = ({
    character,
  }: {
    character: import('../../types/game').CharacterData;
  }) => {
    const { texture: charTexture } = useTexture(character.image);

    if (!charTexture) return null;

    const isBeingDragged = draggingCharacterId === character.id;
    if (isBeingDragged) return null;

    return (
      <pixiSprite
        texture={charTexture}
        x={character.x}
        y={character.y}
        width={GRID_SIZE}
        height={GRID_SIZE}
        anchor={{ x: 0, y: 0 }}
        interactive={true}
        cursor="grab"
        onPointerDown={(e: any) => handleCharacterPointerDown(e, character.id)}
      />
    );
  };

  const charactersOnMap = currentMap
    ? characters.filter((c) => c.mapId === currentMap.id)
    : [];

  // If prerequisites aren't ready yet, render nothing (after all hooks).
  if (!mapTexture || !currentMap) {
    return null;
  }

  return (
    <pixiContainer
      x={0}
      y={0}
      width={mapTexture.width}
      height={mapTexture.height}
      interactive={true}
      onPointerMove={handleGlobalPointerMove}
      onPointerUp={handleGlobalPointerUp}
      onPointerUpOutside={handleGlobalPointerUp}
    >
      {charactersOnMap.map((c) => (
        <CharacterSprite key={c.id} character={c} />
      ))}
    </pixiContainer>
  );
}
