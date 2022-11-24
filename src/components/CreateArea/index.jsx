import { useState } from 'react'
import './styles.css'

function CreateArea({ submitButton, onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  function handleExpanded() {
    setIsExpanded(true)
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
            {isExpanded && (
              <input 
                value={note.title} 
                type="text" 
                placeholder='Título' 
                name='title'
                onChange={handleChange} 
                rows={isExpanded ? 3 : 1}
              />
            )}
            <p>
                <textarea 
                  value={note.content} 
                  onClick={handleExpanded}
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