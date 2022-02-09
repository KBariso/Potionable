import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const EditComment = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {commentId} = useParams()
  console.log(commentId, "I AM THE COMMENT ID!!!!")
//   const {id} = useParams()
//   console.log(id, "I AM THE ID!!!!")
  const allComments = useSelector((state) => state.comments);
  console.log(allComments, "I AM THE all COMMENTs")
  const projectComment = allComments[commentId].comment
  console.log(projectComment, "I AM THE PROJECT COMMENT")
//   const user = useSelector(state => state.session.user?.id)
//   const userId= user;


      const [comment, setComment] = useState(projectComment);
      const [errors, setErrors] = useState([]);

      const updateComment = (e) => setComment(e.target.value);

//   useEffect(() => {
//         if (projectComment) {
//             setComment(projectComment);
//         }
//     }, [projectComment])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.length > 0) return;

    const updatedPayload = {
        // id:commentId,
        comment
        // project_id:projects,
    };

    let updatedComment = await dispatch(editComment(updatedPayload));
    if (!updatedComment) {
        history.push(`/projects/1`)
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
