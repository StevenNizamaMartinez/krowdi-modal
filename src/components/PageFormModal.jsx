import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext'
import Modal from 'react-bootstrap/Modal';
import { sendMessage, typeChanel } from '../db';
import FooterModal from './formModal/FooterModal';
import FormModal from './formModal/FormModal';

function PageFormModal() {
  const [index, setIndex] = useState(0)
  const { dataForm, dataDb, setDataDb,setDataForm } = useAppContext()
  const [message, setMessage] = useState({
    typeMessageId: "",
    subject: '',
    message: '',
    title: ''
  });
  const [title, setTitle] = useState([])

  useEffect(() => {
    const newTitle = dataForm.chanel.sort((a, b) => a.id - b.id).map((chanel) => {
      let id = parseInt(chanel.id)
      let chanelTitle = typeChanel[id - 1].title
      return { chanelTitle, id }
    })
    setTitle(newTitle)
    const newMessage = sendMessage.find((item) => {
      return item.typeMessageId === parseInt(dataForm.message)
    })
    setMessage(newMessage)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setDataDb((prev)=>{
      return [...prev, {...message, title : title[index]?.chanelTitle}]
    })
  }


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title[index]?.chanelTitle}</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <FormModal typeChanel={typeChanel} title={title[index]?.chanelTitle} index={index} message={message} setMessage={setMessage} />
        </Modal.Body>
        <FooterModal index={index} setIndex={setIndex} title={title} />
      </form>
    </>
  )
}

export default PageFormModal
