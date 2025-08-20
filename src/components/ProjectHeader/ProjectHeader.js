import './ProjectHeader.css';

export default function ProjectHeader(props) {
  
  return (
    <section className="project-header-section">
      <header>
        <h1>  
          <span className="project-title">{props.title}</span>
          <span className="project-description"> &nbsp; /  &nbsp; {props.description}</span>
        </h1>
        <div className="project-details">{props.details}</div>
      </header>
    </section>
  );
}
