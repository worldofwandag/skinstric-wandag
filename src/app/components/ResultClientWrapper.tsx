'use client';

import React, { ReactNode } from 'react';
import { ModalProvider } from "../utility/ModalContext";

interface ResultClientWrapperProps {
  children: ReactNode;
}

const ResultClientWrapper: React.FC<ResultClientWrapperProps> = ({ children }) => {
  return (
    <ModalProvider>
      {children}
    </ModalProvider>
  );
};

export default ResultClientWrapper;