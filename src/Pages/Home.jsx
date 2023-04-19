import Button from 'react-bootstrap/Button';
import { useAppContext } from '../context/AppContext';
import Modal  from 'react-bootstrap/Modal';
import { Outlet  } from 'react-router-dom';

function Home() {
  const { handleShow,handleClose, show } = useAppContext()

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Iniciar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Outlet/>
      </Modal>
      <h1>Hola</h1>
    </>
  );
}

export default Home;
