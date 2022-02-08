import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createNewComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const CreateNewComment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectId } = useParams();
  const projects = useSelector(state => state.project.id);
  console.log(projects, "HEllooo")
  const user = useSelector(state => state.session.user?.id)
  const userId= user;

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const updateComment = (e) => setComment(e.target.value);

  useEffect(() => {
    const errors = [];
    if (!comment.length) {
      errors.push("Comment on this project!");
    }
    setErrors(errors);
  }, [comment]);

  // if (!user) return <Redirect to="/home" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const payload = {
      user_id:userId,
      comment,
      project_id:projects,
    };

    let createdComment = await dispatch(createNewComment(payload));
    if (createdComment) {
      setComment("")
    }
  };


  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <textarea
          className="commentInput"
          placeholder="Comment"
          type="text"
          value={comment}
          onChange={updateComment}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewComment;
