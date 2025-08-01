import { createContext, useContext, useState, ReactNode } from 'react';

interface DragContextType {
  isCharacterDragging: boolean;
  setIsCharacterDragging: (isDragging: boolean) => void;
  startCharacterDrag: () => void;
  stopCharacterDrag: () => void;
}

const DragContext = createContext<DragContextType | undefined>(undefined);

interface DragProviderProps {
  children: ReactNode;
}

export function DragProvider({ children }: DragProviderProps) {
  const [isCharacterDragging, setIsCharacterDragging] = useState(false);

  const startCharacterDrag = () => {
    setIsCharacterDragging(true);
  };

  const stopCharacterDrag = () => {
    setIsCharacterDragging(false);
  };

  return (
    <DragContext.Provider
      value={{
        isCharacterDragging,
        setIsCharacterDragging,
        startCharacterDrag,
        stopCharacterDrag,
      }}
    >
      {children}
    </DragContext.Provider>
  );
}

export function useDrag() {
  const context = useContext(DragContext);
  if (context === undefined) {
    throw new Error('useDrag must be used within a DragProvider');
  }
  return context;
}
