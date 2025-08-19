import Divider from '@mui/material/Divider';
import "./ProjectSpecs.css";

export default function ProjectSpecs(props) {
    return (
      <div className="proj-specs">
        <div className="spec-title">role</div>
        <div className="spec-value">{props.role}</div>
        <Divider variant="middle" />
        <div className="spec-title">skills</div>
        <div className="spec-value">{props.skills}</div>
        <Divider variant="middle" />
        {props.tools !== "" ? (<>
        <div className="spec-title">tools</div>
        <div className="spec-value">{props.tools}</div></>) : null}
      </div>
    );
  }
  