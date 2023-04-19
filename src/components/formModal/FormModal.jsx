import React from 'react'
import Form from 'react-bootstrap/Form';

function FormModal({ typeChanel, message, setMessage, index, title }) {

  const handleOnChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
      title
    })
  }

  return (
    <>
      {
        typeChanel[index].typeId === 1 && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe ..."
              value={message?.subject}
              name="subject"
              onChange={handleOnChange}
            />
          </Form.Group>
        )
      }
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea"
          placeholder="Escribe ..."
          value={message?.message}
          name="message"
          onChange={handleOnChange}
        />
      </Form.Group>
    </>
  )
}

export default FormModal
