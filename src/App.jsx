import { useState } from 'react'
import AppHero from './components/AppHero'
import AppHeader from './components/AppHeader'
import AddProject from './components/AddProject'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ])

  const addProject = () => {
    if (!title.trim() || !description.trim()) return
    setProjects((prev) => [
      ...prev,
      { id: Date.now(), title: title.trim(), description: description.trim() },
    ])
    setTitle('')
    setDescription('')
  }

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="app">
      <AppHero />
      <AppHeader />
      <main className="app-main">
        <AddProject
          title={title}
          description={description}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onAdd={addProject}
        />
        <ProjectList projects={projects} onRemove={removeProject} />
      </main>
    </div>
  )
}

export default App