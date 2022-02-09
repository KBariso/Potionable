import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const EditComment = () => {
  const dispatch = useDispatch();
  const oneComment = useSelector((state) => state.commentId);
  console.log(oneComment, "I AM THE ID!!!!!!!!!!!!!!")
  const user = useSelector(state => state.session.user?.id)
  const userId= user;

  const [comment, setComment] = useState(oneComment?.comment);
  const [errors, setErrors] = useState([]);

  const updateComment = (e) => setComment(e.target.value);

//   useEffect(() => {
//     const errors = [];
//     if (!comment.length) {
//       errors.push("Comment on this project!");
//     }
//     setErrors(errors);
//   }, [comment]);

  // if (!user) return <Redirect to="/home" />;


  useEffect(() => {
    if (oneComment) {
        setComment(oneComment?.comment);
    }
}, [oneComment])



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const updatedPayload = {
        user_id:userId,
        comment,
        project_id:projects,
    };

    let updatedComment = await dispatch(editComment(updatedPayload));
    if (!updatedComment) {
        setComment(oneComment?.comment)
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditComment;
