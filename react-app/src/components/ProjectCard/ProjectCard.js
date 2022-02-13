import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ProjectCard.css'
// import UsersList from "../UserList";
import { useEffect, useReducer, useState } from "react";

const ProjectCard = ({ project, users }) => {


  return (
    <Link key={project.id} to={`/projects/${project.id}`}>
      <div className="project-card">
        <div>
          <img className="project-image" src={project?.media_url} alt="alt" />
        </div>
        <div className="project-subtext">
          <p>{project?.title}</p>
          <p>by {users[project.user_id]?.username} </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
