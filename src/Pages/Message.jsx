import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../db'
import Modal from 'react-bootstrap/Modal';
import FormModal from '../components/pageModal/FormModal'
import FooterPageModal from '../components/pageModal/FooterPageModal'

function Message() {
  const navigate = useNavigate()
  const content = data.message
  const type = data.message.type
  const handleNext = () => {
    navigate("/chanel")
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{content?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormModal content={content} type={type} />
      </Modal.Body>
      <FooterPageModal back={false} handleNext={handleNext} />
    </>
  )
}

export default Message
