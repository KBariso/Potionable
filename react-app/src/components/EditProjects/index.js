import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {editProjects} from "../../store/singleProject"


const EditProjects = ({projectsProp}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {projectId} = useParams()


  const oneProject = useSelector((state) => state.projects);


      const [title, setTitle] = useState(projectsProp.title);
    //   const [errors, setErrors] = useState([]);
    console.log(projectsProp, "ONEPROENRIFNEIFNE")


  const handleSubmit = async (e) => {
    e.preventDefault();


    const updatedPayload = {
        projectId,
        title
        // project_id:projects,
    };

    let updatedProject = await dispatch(editProjects(updatedPayload));
    if (!updatedProject) {
        history.push(`/projects/1`)
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="projectInput"
          placeholder={title}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProjects;
