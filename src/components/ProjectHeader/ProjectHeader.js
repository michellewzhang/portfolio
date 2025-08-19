export default function ProjectHeader(props) {
  return (
    <section className="header">
      <header>
        <h1>  
          <span className="header-title">{props.title}</span>
          <span className="header-description"> &nbsp; /  &nbsp; {props.description}</span>
        </h1>
        <br></br>
        <div className="header-details">{props.details}</div>
      </header>
    </section>
  );
}
