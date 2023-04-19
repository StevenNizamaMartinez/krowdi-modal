import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

function FooterModal({ index, setIndex, title }) {
  const navigate = useNavigate();
  const { dataForm, setDataForm, dataDb , setDataDb} = useAppContext()

  const handleGoBack = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      navigate(-1)
    }
    setDataForm((prev) => {
      return {
        ...prev,
        chanel: [],
      }
    })
    setDataDb((prev)=>{
      return prev.filter((item)=> item.title !== title[index]?.chanelTitle)
    })
  };

  const handleNext = () => {
    setIndex(index + 1)
  }

  const handleSave = () => {
    console.log(dataDb);
    alert("Enviando mensjaes...")
  }

    return (
      <Modal.Footer>
        <Button variant="secondary" onClick={handleGoBack}>
          Previus
        </Button>
        {
          title?.length - 1 === index ? (
            <Button type='submit' variant="success" onClick={handleSave}>
              Send
            </Button>
          ) : (
            <Button type='submit' variant="primary" onClick={handleNext}>
              Next
            </Button>
          )
        }
      </Modal.Footer>
    )
  }


export default FooterModal
