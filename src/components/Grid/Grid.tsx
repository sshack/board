import { useEffect, useState } from 'react';
import { useTexture } from '../../hooks/useTexture';
import { useGameData } from '../../hooks/useGameData';

type GridState = 'default' | 'blue' | 'transparent';

interface GridProps {
  gridState: GridState;
}

export default function Grid({ gridState }: GridProps) {
  const { currentMap } = useGameData();
  const { texture: mapTexture } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );
  const [gridDataURL, setGridDataURL] = useState<string | null>(null);

  // Only call useTexture when we have a valid data URL
  const gridTextureResult = useTexture(gridDataURL || '');
  const gridTexture = gridDataURL ? gridTextureResult.texture : null;

  useEffect(() => {
    if (!mapTexture) return;

    // Create a canvas to generate the grid
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match the map
    canvas.width = mapTexture.width;
    canvas.height = mapTexture.height;

    // Clear canvas with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid settings based on state
    const gridSpacing = currentMap?.gridSize || 64; // Grid spacing based on map
    const lineWidth = 1;

    let lineColor: string;
    switch (gridState) {
      case 'default':
        lineColor = 'rgba(0, 0, 0, 0.3)'; // Semi-transparent black
        break;
      case 'blue':
        lineColor = 'rgba(59, 130, 246, 0.8)'; // Strong blue
        break;
      case 'transparent':
        lineColor = 'rgba(0, 0, 0, 0)'; // Completely transparent
        break;
      default:
        lineColor = 'rgba(0, 0, 0, 0.3)';
    }

    // Set line style
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Convert canvas to data URL
    const dataURL = canvas.toDataURL('image/png');
    setGridDataURL(dataURL);
  }, [mapTexture, gridState, currentMap]);

  if (!gridTexture || !mapTexture) {
    return null;
  }

  const handlePointerDown = (event: any) => {
    const gridSpacing = currentMap?.gridSize || 64;
    const gridX = Math.floor(event.data.global.x / gridSpacing);
    const gridY = Math.floor(event.data.global.y / gridSpacing);
  };

  const handlePointerMove = (event: any) => {
    // Only log during drag (when pointer is down)
    if (event.data.buttons > 0) {
      const gridSpacing = currentMap?.gridSize || 64;
      const gridX = Math.floor(event.data.global.x / gridSpacing);
      const gridY = Math.floor(event.data.global.y / gridSpacing);
    }
  };

  return (
    <pixiSprite
      texture={gridTexture}
      x={0}
      y={0}
      width={mapTexture.width}
      height={mapTexture.height}
      interactive={true}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    />
  );
}
