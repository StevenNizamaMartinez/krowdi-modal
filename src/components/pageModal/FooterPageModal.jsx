import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

function FooterPageModal({back = true,handleNext}) {
  const navigate = useNavigate();
  const { dataForm, setDataForm } = useAppContext()

  const handleGoBack = () => {
    navigate(-1);
    setDataForm((prev) => {
      return {
        ...prev,
        chanel: [],
      }
    })
  };

  return (
    <Modal.Footer>
      {
        back && (
          <Button variant="secondary" onClick={handleGoBack}>
            Previus
          </Button>
        )
      }
      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>
    </Modal.Footer>
  )
}

export default FooterPageModal
