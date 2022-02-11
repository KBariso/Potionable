import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  // TODO: Get username for project card

  // console.log(project, 'this is the prop lol') // gives full project details

  return (
    <Link key={project.id} to={`/projects/${project.id}`}>
      <div className="project-card">
        <div>
          <img className="project-image" src={project.media_url} alt="alt" />
        </div>
        <div className="project-subtext">
          <p>{project.title}</p>
          <p>by </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
