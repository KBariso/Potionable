import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../store/allProjects";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./AllProjects.css";

const AllProjects = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("searchKeyword");
  const [searchKeyword, setSearchKeyword] = useState(myParam ? myParam : "");
  const [projects, setProjects] = useState([]);

  // const search = () => async (dispatch) => {
  const search = async function () {
    const res = await fetch(`/api/search/?searchKeyword=${searchKeyword}`);
    if (res.ok) {
      const result = await res.json();
      setProjects(result);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    search();
  }, [searchKeyword]);

  // useEffect(() => {
  //   dispatch(getAllProjects());
  // }, [dispatch]);

  // const projects_two = useSelector((state) => {
  //   console.log('>>>>>>>PROJECT State>>>>', state.projects)
  //   // Makes an array to map through later:
  //   return Object.values(state.projects);
  // });
  // console.log("TEST FROM ALL PROJECTS", projects_two);





  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      // console.log(responseData, 'this is the response data')
      let userMap = {}
      for (let user of responseData.users) {
        userMap[user.id] = user
      }
      setUsers(userMap);
    }
    fetchData();
  }, []);



  return (
    <div className='divWrapperMainPage'>
      <input value={searchKeyword}  onChange={(e) => setSearchKeyword(e.target.value)}/>
      <div className="image-container">

        {searchKeyword? null : (
          <>
          <div className="overlay-container">

          <h1 className="overlay-h1"> Let's start brewing...</h1>
          <p className="overlay-p">Potionable is a community for people who love to brew potions.
          <br />
          Come explore, share, and make your next potion with us!</p>
          </div>
          <img src="https://giffiles.alphacoders.com/214/214512.gif" />
          </>

        )}
      </div>
      <div className="potionable-container">
        {projects?.map((project) => {
          return <ProjectCard project={project} users={users} />;
        })}
      </div>
    </div>
  );
};

export default AllProjects;
