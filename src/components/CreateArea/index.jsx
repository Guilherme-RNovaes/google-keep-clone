import './styles.css'

function CreateArea() {
  return (
    <div>
        <form>
            <input type="text" placeholder='Título' name='title' />
            <p>
                <textarea name="content" placeholder='Criar uma nota...'></textarea>
            </p>
        </form>
    </div>
  )
}

export default CreateArea