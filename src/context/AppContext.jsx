import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [dataForm, setDataForm] = useState({
    chanel: [],
    message: "",
  })
  const [dataDb, setDataDb] = useState([])
  const handleClose = () => {
    navigate('/')
    setShow(false)
  };
  const handleShow = () => {
    navigate('/message')
    setShow(true)

  };

  return (
    <AppContext.Provider value={{ show, setShow, handleClose, handleShow, dataForm, setDataForm,dataDb, setDataDb }}>
      {children}
    </AppContext.Provider>
  )
}


export const useAppContext = () => useContext(AppContext);
