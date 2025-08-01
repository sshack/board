import { useState, useRef, useCallback } from 'react';
import { useTexture } from '../../hooks/useTexture';
import { useGameData } from '../../hooks/useGameData';
import { Graphics, Rectangle } from 'pixi.js';

interface DrawOverlayProps {
  active: boolean;
}

interface Point {
  x: number;
  y: number;
}

export default function DrawOverlay({ active }: DrawOverlayProps) {
  const { currentMap } = useGameData();
  const { texture: mapTexture } = useTexture(
    currentMap?.image || '/assets/tilemap.png'
  );

  // Keep all strokes drawn by the user
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const currentStroke = useRef<Point[] | null>(null);

  const startStroke = useCallback(
    (e: any) => {
      if (!active) return;
      e.stopPropagation();
      e.stopImmediatePropagation();

      const local = e.data.getLocalPosition(e.currentTarget);
      currentStroke.current = [{ x: local.x, y: local.y }];
      setStrokes((prev) => [...prev, currentStroke.current as Point[]]);
    },
    [active]
  );

  const extendStroke = useCallback(
    (e: any) => {
      if (!active || !currentStroke.current) return;
      e.stopPropagation();
      e.stopImmediatePropagation();

      const local = e.data.getLocalPosition(e.currentTarget);
      currentStroke.current.push({ x: local.x, y: local.y });
      // trigger re-render
      setStrokes((prev) => [...prev]);
    },
    [active]
  );

  const endStroke = useCallback((e: any) => {
    if (currentStroke.current) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
    currentStroke.current = null;
  }, []);

  if (!active || !mapTexture) return null;

  const draw = (g: Graphics) => {
    g.clear();

    // Transparent hit rectangle – suppress stroke by lineStyle(0)
    g.lineStyle(0);
    g.beginFill(0x000000, 0);
    g.drawRect(0, 0, mapTexture.width, mapTexture.height);
    g.endFill();

    // Draw each stroke collected so far (bright red for visibility)
    strokes.forEach((stroke) => {
      if (stroke.length === 0) return;

      g.moveTo(stroke[0].x, stroke[0].y);

      for (let i = 1; i < stroke.length; i++) {
        g.lineTo(stroke[i].x, stroke[i].y);
      }

      // Render the path using the new v8 stroke API
      g.stroke({ width: 6, color: 0xff3b3b });
    });
  };

  return (
    <pixiGraphics
      draw={draw}
      x={0}
      y={0}
      interactive={true}
      hitArea={new Rectangle(0, 0, mapTexture.width, mapTexture.height)}
      onPointerDown={startStroke}
      onPointerMove={extendStroke}
      onPointerUp={endStroke}
      onPointerUpOutside={endStroke}
      interactiveChildren={false}
    />
  );
}
