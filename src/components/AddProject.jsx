import './AddProject.css'

export default function AddProject({ title, description, onTitleChange, onDescriptionChange, onAdd }) {
  return (
    <section className="card add-card">
      <h2>Add Project</h2>
      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault()
          onAdd()
        }}
      >
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </section>
  )
}