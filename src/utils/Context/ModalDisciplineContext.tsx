import React, { ReactNode, createContext, useContext, useState } from "react";

interface ModalDisciplineContextType {
  isModalOpenDiscipline: boolean;
  openModalDiscipline: () => void;
  closeModalDiscipline: () => void;
}

const ModalDisciplineContext = createContext<ModalDisciplineContextType | undefined>(undefined);

export function useModalDiscipline() {
  const context = useContext(ModalDisciplineContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export const ModalDisciplineProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpenDiscipline, setIsModalDisciplineOpen] = useState(false);

  const openModalDiscipline = () => {
    setIsModalDisciplineOpen(true);
  };
 
  const closeModalDiscipline = () => {
    setIsModalDisciplineOpen(false);
  };

  return (
    <ModalDisciplineContext.Provider value={{ isModalOpenDiscipline, openModalDiscipline, closeModalDiscipline }}>
      {children}
    </ModalDisciplineContext.Provider>
  );
};
