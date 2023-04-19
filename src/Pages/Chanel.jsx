import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../db'
import Modal from 'react-bootstrap/Modal';
import FormModal from '../components/pageModal/FormModal'
import FooterPageModal from '../components/pageModal/FooterPageModal'

function Chanel() {

  const navigate = useNavigate()
  const content = data.chanel
  const type = data.chanel.type
  
  const handleNext = () => {
    navigate("/send")
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{content?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormModal content={content} type={type} />
      </Modal.Body>
      <FooterPageModal handleNext={handleNext} />
    </>
  )
}

export default Chanel
