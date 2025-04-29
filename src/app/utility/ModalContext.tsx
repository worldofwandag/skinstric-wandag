'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface ModalContextType {
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

// Create the context with default values
const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  setModalOpen: () => {},
});

// Provider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the context
export const useModalContext = () => useContext(ModalContext);