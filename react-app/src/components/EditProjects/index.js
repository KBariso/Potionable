import React, { useEffect,useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {editProjects} from "../../store/singleProject"


const EditProjects = ({projectsProp, hideForm}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {projectId} = useParams()

      const [title, setTitle] = useState(projectsProp.title);
      const [description, setDescription]= useState(projectsProp.description)
      const [media_url, setMedia]= useState(projectsProp.media_url)

    console.log(projectsProp, "ONEPROENRIFNEIFNE")


  const handleSubmit = async (e) => {
    e.preventDefault();


    const updatedPayload = {
        projectId,
        title,
        description,
        media_url

    };


     dispatch(editProjects(updatedPayload));

        hideForm();
        window.location.reload();
   

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
