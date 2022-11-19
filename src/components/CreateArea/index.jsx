import { useState } from 'react'
import './styles.css'

function CreateArea({ submitButton, onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function handleChange(e) {
    const{name, value} = e.target
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  function submitButton(event) {
    onAdd(note)
    setNote({
      title: "",
      content: "",
    })
    event.preventDefault();
  }

  return (
    <div>
        <form>
            <input 
              value={note.title} 
              type="text" 
              placeholder='Título' 
              name='title'
              onChange={handleChange} 
            />
            <p>
                <textarea 
                  value={note.content} 
                  name="content" 
                  placeholder='Criar uma nota...'
                  onChange={handleChange}
                ></textarea>
            </p>
            <button onClick={submitButton}>Fechar</button>
        </form>
    </div>
  )
}

export default CreateArea