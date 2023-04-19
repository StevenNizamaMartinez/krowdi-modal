import Form from 'react-bootstrap/Form';
import { useAppContext } from '../../context/AppContext';

function FormModal({ content, type }) {
  const { dataForm, setDataForm } = useAppContext()

  const handleChange = (e) => {
    if (e.target.name === "message") {
      setDataForm({
        ...dataForm,
        message: e.target.id,
      })
    } else {
      e.target.checked ?
        setDataForm((prev) => {
          return {
            ...prev,
            chanel: [...prev.chanel, prev.chanel.includes(e.target.id) ? "" : {
              id: e.target.id,
              value: {}
            }]
          }
        }) :
        setDataForm((prev) => {
          return {
            ...prev,
            chanel: prev.chanel.filter((item) => item.id !== e.target.id)
          }
        })
    }

  }

  return (
    <form>
      {
        type === "message" ? (
          content?.options.map((option, i) => {
            return (
              <Form.Check
                key={i}
                type="radio"
                label={option.title}
                name={type}
                id={option.typeId}
                onChange={handleChange}
              />
            )
          })
        ) : content?.options.map((option, i) => {
          return (
            <Form.Check
              key={i}
              type="checkbox"
              label={option.title}
              name={type}
              id={option.typeId}
              onChange={handleChange}
            />
          )
        })
      }
    </form>
  )
}

export default FormModal
