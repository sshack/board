import { useEffect, useState } from 'react';
import { useApplication } from '@pixi/react';

export const useScreenSize = () => {
  const app = useApplication();
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      try {
        if (app && app.app && app.app.screen && app.app.renderer) {
          const newWidth = app.app.screen.width;
          const newHeight = app.app.screen.height;

          // Only update if we have valid dimensions
          if (newWidth > 0 && newHeight > 0) {
            setScreenSize({
              width: newWidth,
              height: newHeight,
            });
          }
        }
      } catch (error) {
        console.warn('Error updating screen size:', error);
      }
    };

    // Add a delay to ensure PixiJS is fully initialized
    const timer = setTimeout(updateScreenSize, 100);

    // Listen to PixiJS resize events
    if (app && app.app && app.app.renderer) {
      const onResize = () => {
        setTimeout(updateScreenSize, 10);
      };

      app.app.renderer.on('resize', onResize);

      // Also listen to the canvas resize
      const canvas = app.app.canvas;
      if (canvas) {
        const resizeObserver = new ResizeObserver(() => {
          setTimeout(updateScreenSize, 10);
        });
        resizeObserver.observe(canvas);

        return () => {
          clearTimeout(timer);
          if (app.app && app.app.renderer) {
            app.app.renderer.off('resize', onResize);
          }
          resizeObserver.disconnect();
        };
      }

      return () => {
        clearTimeout(timer);
        if (app.app && app.app.renderer) {
          app.app.renderer.off('resize', onResize);
        }
      };
    }

    return () => {
      clearTimeout(timer);
    };
  }, [app]);

  return screenSize;
};
