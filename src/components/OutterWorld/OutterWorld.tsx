import { useTexture } from '../../hooks/useTexture';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useGameData } from '../../hooks/useGameData';

export default function OutterWorld() {
  const { currentMap } = useGameData();
  const { texture: mapTexture } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );
  const screenSize = useScreenSize();

  if (!mapTexture || screenSize.width === 0) {
    return null;
  }

  const mapWidth = mapTexture.width;
  const mapHeight = mapTexture.height;
  const boundarySize = Math.max(screenSize.width, screenSize.height) * 2;

  const drawBoundaries = (graphics: any) => {
    graphics.clear();
    graphics.setFillStyle({ color: 0x000000, alpha: 1.0 });

    // Draw dark boundaries around the map to prevent seeing outside
    // Top boundary
    graphics.rect(
      -boundarySize,
      -boundarySize,
      boundarySize * 2 + mapWidth,
      boundarySize
    );
    graphics.fill();

    // Bottom boundary
    graphics.rect(
      -boundarySize,
      mapHeight,
      boundarySize * 2 + mapWidth,
      boundarySize
    );
    graphics.fill();

    // Left boundary
    graphics.rect(-boundarySize, 0, boundarySize, mapHeight);
    graphics.fill();

    // Right boundary
    graphics.rect(mapWidth, 0, boundarySize, mapHeight);
    graphics.fill();
  };

  return <pixiGraphics draw={drawBoundaries} x={0} y={0} />;
}
