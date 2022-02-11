import { useState } from "react";
import { createOneStep } from "../../store/step";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StepForm = () => {
  const dispatch = useDispatch();

//   const test = useSelector((state) => state.steps.id);
  let { projectId } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateBody = (e) => setBody(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      body,
      project_id: projectId,
    };

    if (!title) {
      setErrors(["Did you drink a forgetfulness potion? You have no title!"]);
    } else if (title.length <= 3) {
      setErrors(["Your title length is too short"]);
    } else {
      setErrors([]);

      return dispatch(createOneStep(payload)).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
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
          placeholder="Title"
          type="text"
          value={title}
          onChange={updateTitle}
        />

        <textarea
          placeholder="Step details"
          type="text"
          value={body}
          onChange={updateBody}
        />

        <button type="submit">Add a new step</button>
      </form>
    </div>
  );
};

export default StepForm;
