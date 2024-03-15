import { createContext, useEffect, useState } from "react";

export const Context = createContext([]);

export const ArticleProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpanModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Context.Provider
      value={{
        handleCloseModal,
        handleOpanModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
