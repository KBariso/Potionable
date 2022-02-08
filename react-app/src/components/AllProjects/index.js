import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../store/allProjects";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const projects = useSelector((state) => {
    return Object.values(state.projects);
  });
  console.log("TEST FROM ALL PROJECTS", projects);

  return (
    <div>
      {projects?.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <p> {project.title} </p>
          <img src={project.media_url} />
        </Link>
      ))}
    </div>
  );
};

export default AllProjects;
