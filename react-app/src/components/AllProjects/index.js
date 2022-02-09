import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../store/allProjects";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('searchKeyword');
  const [searchKeyword, setSearchKeyword] = useState(myParam? myParam: '');
  const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   dispatch(getAllProjects());
  // }, [dispatch]);

  // const search = () => async (dispatch) => {
  const search = async function() {
    const res = await fetch(`/api/search/?searchKeyword=${searchKeyword}`);
    if (res.ok) {
      const result = await res.json()
      setProjects(result)
    } else {
      alert('error')
    }

  }

  useEffect(() => {
    search()
  }, [searchKeyword])



  // const projects = useSelector((state) => {
  //   console.log('>>>>>>>PROJECT State>>>>', state.projects)
  //   // Makes an array to map through later:
  //   return Object.values(state.projects);
  // });
  // console.log("TEST FROM ALL PROJECTS", projects);

  return (
    <div>
      {/* <input value={searchKeyword}  onChange={(e) => setSearchKeyword(e.target.value)}/> */}

      {projects?.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>

          <p> {project.title} </p>
          <img src={project.media_url} alt='alt' />
        </Link>
      ))}
    </div>
  );
};

export default AllProjects;
