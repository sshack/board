import { useState, useEffect } from 'react';
import { useDrag } from '../../contexts/DragContext';

interface CustomCursorProps {}

export default function CustomCursor({}: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [overSheet, setOverSheet] = useState(false);
  const { isCharacterDragging } = useDrag();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Detect if hovering over character sheet
      const target = e.target as HTMLElement | null;
      if (target && target.closest('[data-character-sheet]')) {
        setOverSheet(true);
      } else {
        setOverSheet(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
      {/* Custom RPG Cursor */}
      <div
        className="absolute"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: overSheet ? 'none' : 'translate(-50%, -50%)',
        }}
      >
        {/* RPG-style cursor - sword/crosshair design */}
        <div className={`relative ${overSheet ? 'w-6 h-6' : 'w-8 h-8'}`}>
          {overSheet ? (
            // Triangle-style pointer
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 2px rgba(250, 204, 21, 0.8))' }}
            >
              <path
                d="M0 0 L24 12 L14 14 L12 24 Z"
                fill="#facc15" /* yellow-400 */
                stroke="#d97706" /* amber-600 */
                strokeWidth="1"
              />
            </svg>
          ) : (
            <>
              {/* Outer glow */}
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-30 blur-sm animate-pulse"></div>

              {/* Main crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Vertical line */}
                <div
                  className={`absolute w-1 h-8 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 rounded-full shadow-lg`}
                ></div>
                {/* Horizontal line */}
                <div
                  className={`absolute h-1 w-8 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 rounded-full shadow-lg`}
                ></div>
              </div>

              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-2 h-2 bg-yellow-200 rounded-full shadow-md border border-yellow-600`}
                ></div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-yellow-400 rounded-tl-sm"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-yellow-400 rounded-tr-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-yellow-400 rounded-bl-sm"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-yellow-400 rounded-br-sm"></div>
            </>
          )}
        </div>
      </div>

      {/* Character image when dragging - offset from cursor */}
      {isCharacterDragging && (
        <div
          className="absolute"
          style={{
            left: mousePosition.x + 20, // Offset to the right
            top: mousePosition.y - 10, // Offset up
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-6 h-6 bg-white rounded-lg shadow-lg animate-bounce border-2 border-yellow-400 opacity-90 overflow-hidden">
            <img
              src="/assets/lady.png"
              alt="Character being dragged"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
