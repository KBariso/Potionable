import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createNewProject } from "../../store/singleProject";
import './CreateProject.css'

const CreateNewProject = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const user = useSelector(state => state.session.user?.id)
    const userId= user;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState("");
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateMedia = (e) => setMedia(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id:userId,
            title,
            description,
            media_url:media
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

        let createdProject = await dispatch(createNewProject(payload)).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });

        if (createdProject) {
          history.push(`/`)
        }
    }
      };
      if (!user) return <Redirect to="/" />;

    return (
        <>
        <div className='newProjectTitle'>CREATE A NEW POTION</div>

            <form  className='newProjectsForm'onSubmit={handleSubmit}>
            {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
         <div className="newProjectsinput-parent">
                <input
                className='newProjectsinputLogin'

                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={updateTitle}
                />
                </div>
                 <div className="input-parent">
                <textarea
                    className='newTextArea'
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={updateDescription}
                />
                </div>
                 <div className="newProjectsinput-parent">
                <input

                className='newProjectsinputLogin'
                    placeholder="Media"
                    type="text"
                    value={media}
                    onChange={updateMedia}
                />
                </div>
                <button  className='buttonLogin'type="submit">Create New Potion</button>
            </form>
            </>


    )
}


export default CreateNewProject
