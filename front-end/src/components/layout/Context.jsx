import { createContext, useEffect, useState, useContext } from "react";

export const Context = createContext([]);

export const ArticleProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
        userData,
        setUserData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useData = () => useContext(Context);
