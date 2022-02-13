import React, { useEffect,useState } from "react";
import {useSelector,  useDispatch} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {editProjects} from "../../store/singleProject"
import './EditProject.css'
import {getSingleProject} from "../../store/singleProject"



const EditProjects = ({projectsProp, hideForm}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {projectId} = useParams()

  const user = useSelector(state => state.session.user);
  const userId = user?.id

  const preSession= projectsProp?.user_id
  const sessionId = userId === preSession

      const [title, setTitle] = useState(projectsProp.title);
      const [description, setDescription]= useState(projectsProp.description)
      const [media_url, setMedia]= useState(projectsProp.media_url)
      const [errors, setErrors] = useState([]);
    // console.log(projectsProp, "ONEPROENRIFNEIFNE")

    // useEffect(()=>{
    //     const errors = [];
    //     if (!title.length) {
    //         errors.push("Title on this project!");
    //     }

    //       setErrors(errors);
    //     }, [ title]);



  const handleSubmit = async (e) => {
    e.preventDefault();




    const updatedPayload = {
        projectId,
        title,
        description,
        media_url

    };

    if (!title) {
        setErrors(["Did you drink a forgetfulness potion? You have no title!"]);
      } else if (title.length <= 3) {
        setErrors(["Your title length is too short"]);
      }
      else if (!description) {
          setErrors(["Did you drink a forgetfulness potion? You have no description!"]);
        }
        else if (description.length <= 3) {
          setErrors(["Your description length is too short"]);
        } else {
        setErrors([]);


     let updateProject= await dispatch(editProjects(updatedPayload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });;


        // window.location.reload();

        if (!updateProject) {

            dispatch(getSingleProject(projectId))
            hideForm();
        }
    }


  };


  return (
    <div className="formContainer">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          {errors.length > 0 && (
            <ul className="errors">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
            <div className="formInputs">
              <div>
                <textarea
                  className="projectInputTitle"
                  placeholder={title}
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  className="projectInputDescription"
                  placeholder={description }
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <input
                  className="projectInputMedia"
                  placeholder={media_url }
                  type="text"
                  value={media_url}
                  onChange={(e) => setMedia(e.target.value)}
                />
              </div>
            </div>
            <div className="SaveProjectChangesContainer">
              <div>
                <button className="SaveProjectChanges" type="submit">Save Changes</button>
              </div>
            </div>
        </form>
      </div>

    </div>
  );
};

export default EditProjects;
