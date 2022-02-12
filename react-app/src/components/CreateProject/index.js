import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewProject } from "../../store/singleProject";

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
                <input
                    className="titleInput"
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={updateTitle}
                />
                <textarea
                    className="titleInput"
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={updateDescription}
                />
                <input
                    className="mediaInput"
                    placeholder="Media"
                    type="text"
                    value={media}
                    onChange={updateMedia}
                />
                <button type="submit">New Project</button>
            </form>

        </div>
    )
}


export default CreateNewProject
