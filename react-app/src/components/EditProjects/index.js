import React, { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {editProjects} from "../../store/singleProject"
import './EditProject.css'


const EditProjects = ({projectsProp, hideForm}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {projectId} = useParams()

      const [title, setTitle] = useState(projectsProp.title);
      const [description, setDescription]= useState(projectsProp.description)
      const [media_url, setMedia]= useState(projectsProp.media_url)
      const [errors, setErrors] = useState([]);
    console.log(projectsProp, "ONEPROENRIFNEIFNE")


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([])

    const updatedPayload = {
        projectId,
        title,
        description,
        media_url

    };


     let updateProject= dispatch(editProjects(updatedPayload));

        hideForm();
        window.location.reload();

        // if (updateProject) {
        //     setErrors(updateProject);
        // }


  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
      {/* <ul>
        {errors.map((error) => (
          <li id='errorLi' key={error}>{error}</li>
         ))}
                </ul> */}
        <textarea
          className="projectInput"
          placeholder={title}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
          <textarea
          className="projectInput"
          placeholder={description }
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
          <input
          className="projectInput"
          placeholder={media_url }
          type="text"
          value={media_url}
          onChange={(e) => setMedia(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProjects;
