import { Application, useExtend } from '@pixi/react';
import { Sprite, Container, Graphics } from 'pixi.js';
import { useRef, useEffect } from 'react';
import Background from '../Background/Background';
import Level from '../Level/Level';
import Grid from '../Grid/Grid';
import Camera from '../Camera/Camera';
import OutterWorld from '../OutterWorld/OutterWorld';
import CharacterLayer from '../CharacterLayer/CharacterLayer';
import CustomCursor from '../CustomCursor/CustomCursor';
import { DragProvider } from '../../contexts/DragContext';
import DrawOverlay from '../DrawOverlay/DrawOverlay';

type GridState = 'default' | 'blue' | 'transparent';

interface ExperienceProps {
  gridState: GridState;
  drawActive: boolean;
}

export default function Experience({ gridState, drawActive }: ExperienceProps) {
  useExtend({ Sprite, Container, Graphics });

  return (
    <DragProvider>
      <div className="w-full h-full cursor-none">
        {' '}
        {/* Hide default cursor */}
        <Application
          resizeTo={typeof window !== 'undefined' ? window : undefined}
          backgroundAlpha={0}
        >
          <Background src="/background.jpeg" />
          <Camera disablePan={drawActive}>
            {/* Map texture (bottom) */}
            <Level />

            {/* Grid overlay */}
            <Grid gridState={gridState} />

            {/* Characters */}
            <CharacterLayer />

            {/* Drawing layer – render last so it sits on top and grabs events when active */}
            <DrawOverlay active={drawActive} />

            {/* Outer world boundaries */}
            <OutterWorld />
          </Camera>
        </Application>
        {/* Custom RPG Cursor */}
        <CustomCursor />
      </div>
    </DragProvider>
  );
}
