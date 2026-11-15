import './ProjectItem.css'

export default function ProjectItem({ project, onRemove }) {
  return (
    <li className="project-item">
      <button
        type="button"
        className="delete-btn"
        aria-label="Delete project"
        onClick={() => onRemove(project.id)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  )
}