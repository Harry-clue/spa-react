import { useState } from 'react'
import ProjectItem from './ProjectItem'
import './ProjectList.css'

export default function ProjectList({ projects, onRemove }) {
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p) =>
    `${p.title} ${p.description}`.toLowerCase().includes(search.trim().toLowerCase())
  )

  return (
    <section className="card list-card">
      <div className="search">
        <input
          type="text"
          placeholder="Search Projects"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="project-list">
        {filtered.map((p) => (
          <ProjectItem key={p.id} project={p} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  )
}