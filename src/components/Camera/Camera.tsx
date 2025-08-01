import { useCallback, useState, useRef, useEffect } from 'react';
import { useApplication } from '@pixi/react';
import { useTexture } from '../../hooks/useTexture';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useDrag } from '../../contexts/DragContext';
import { useGameData } from '../../hooks/useGameData';

interface CameraProps {
  children: React.ReactNode;
  disablePan?: boolean;
}

export default function Camera({ children, disablePan = false }: CameraProps) {
  const app = useApplication();
  const { currentMap } = useGameData();
  const { texture: mapTexture } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );
  const screenSize = useScreenSize();
  const { isCharacterDragging } = useDrag();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  // Calculate map boundaries
  const mapWidth = mapTexture?.width || 0;
  const mapHeight = mapTexture?.height || 0;

  // Calculate minimum scale to fit the map within screen while maintaining aspect ratio
  const getMinScale = useCallback(() => {
    if (!mapTexture || screenSize.width === 0 || screenSize.height === 0)
      return 1;

    const scaleX = screenSize.width / mapWidth;
    const scaleY = screenSize.height / mapHeight;
    return Math.min(scaleX, scaleY); // Fit entire map within screen, showing background if needed
  }, [mapTexture, mapWidth, mapHeight, screenSize]);

  // Center the map initially with proper timing
  useEffect(() => {
    if (mapTexture && screenSize.width > 0 && screenSize.height > 0) {
      // Add a small delay to ensure PixiJS is fully initialized
      const timer = setTimeout(() => {
        const minScale = getMinScale();
        const scaledWidth = mapWidth * minScale;
        const scaledHeight = mapHeight * minScale;

        const centerX = (screenSize.width - scaledWidth) / 2;
        const centerY = (screenSize.height - scaledHeight) / 2;

        setPosition({ x: centerX, y: centerY });
        setScale(minScale);
        setIsInitialized(true);
      }, 100); // Small delay to ensure everything is ready

      return () => clearTimeout(timer);
    }
  }, [mapTexture, mapWidth, mapHeight, screenSize, getMinScale]);

  // Update position when screen size changes (after initialization)
  useEffect(() => {
    if (
      isInitialized &&
      mapTexture &&
      screenSize.width > 0 &&
      screenSize.height > 0
    ) {
      const minScale = getMinScale();
      const scaledWidth = mapWidth * minScale;
      const scaledHeight = mapHeight * minScale;

      const centerX = (screenSize.width - scaledWidth) / 2;
      const centerY = (screenSize.height - scaledHeight) / 2;

      setPosition({ x: centerX, y: centerY });
      setScale(minScale);
    }
  }, [screenSize, isInitialized, mapTexture, mapWidth, mapHeight, getMinScale]);

  const constrainPosition = useCallback(
    (newPosition: { x: number; y: number }, currentScale: number) => {
      if (!mapTexture) return newPosition;

      const scaledMapWidth = mapWidth * currentScale;
      const scaledMapHeight = mapHeight * currentScale;

      // Allow map to move freely, but don't let it go too far off screen
      // This gives flexibility while keeping the map generally centered
      const padding = Math.min(screenSize.width, screenSize.height) * 0.1; // 10% padding

      const minX = -scaledMapWidth + padding;
      const maxX = screenSize.width - padding;
      const minY = -scaledMapHeight + padding;
      const maxY = screenSize.height - padding;

      return {
        x: Math.max(minX, Math.min(maxX, newPosition.x)),
        y: Math.max(minY, Math.min(maxY, newPosition.y)),
      };
    },
    [mapTexture, mapWidth, mapHeight, screenSize]
  );

  const handlePointerDown = useCallback(
    (event: any) => {
      if (disablePan) return;
      if (isCharacterDragging) return; // Don't start map dragging if character is being dragged

      // Additional check - if the event target has a cursor property set to grab/grabbing, it's likely a character
      if (
        event.target &&
        (event.target.cursor === 'grab' || event.target.cursor === 'grabbing')
      ) {
        return; // Don't start map dragging if clicking on an interactive character
      }

      setIsDragging(true);
      lastPointerPosition.current = { x: event.global.x, y: event.global.y };
    },
    [disablePan, isCharacterDragging]
  );

  const handlePointerMove = useCallback(
    (event: any) => {
      if (!isDragging) return;

      const currentPointer = { x: event.global.x, y: event.global.y };
      const deltaX = currentPointer.x - lastPointerPosition.current.x;
      const deltaY = currentPointer.y - lastPointerPosition.current.y;

      setPosition((prev) => {
        const newPosition = {
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        };
        return constrainPosition(newPosition, scale);
      });

      lastPointerPosition.current = currentPointer;
    },
    [isDragging, scale, constrainPosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback(
    (event: any) => {
      event.preventDefault();

      // Get mouse position in screen coordinates
      const mouseX = event.global.x;
      const mouseY = event.global.y;

      // Calculate zoom
      const zoomFactor = 1.1;
      const direction = event.deltaY > 0 ? 1 / zoomFactor : zoomFactor;
      const minScale = getMinScale();
      const newScale = Math.max(minScale, Math.min(3, scale * direction));

      // If scale doesn't change, don't do anything
      if (newScale === scale) return;

      // Calculate the world position under the mouse before zoom
      const worldX = (mouseX - position.x) / scale;
      const worldY = (mouseY - position.y) / scale;

      // Calculate new camera position to keep the world point under the mouse
      const newX = mouseX - worldX * newScale;
      const newY = mouseY - worldY * newScale;

      // Apply constraints and update
      const constrainedPosition = constrainPosition(
        { x: newX, y: newY },
        newScale
      );
      setPosition(constrainedPosition);
      setScale(newScale);
    },
    [scale, position, constrainPosition, getMinScale]
  );

  return (
    <pixiContainer
      x={position.x}
      y={position.y}
      scale={{ x: scale, y: scale }}
      interactive={true}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerUpOutside={handlePointerUp}
      onWheel={handleWheel}
    >
      {children}
    </pixiContainer>
  );
}
