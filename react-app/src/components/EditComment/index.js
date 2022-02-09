import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const EditComment = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const {commentId} = useParams()

//   console.log(commentId)
  const oneComment = useSelector((state) => state.comments);
  console.log(oneComment[commentId].user_id, "I AM THE ONE COMENNT")
  const projectId = oneComment[commentId].project_id
  // console.log(oneComment.comment)

//   const user = useSelector(state => state.session.user?.id)
//   const userId= user;



      const [comment, setComment] = useState(oneComment[commentId].comment);
    //   const [errors, setErrors] = useState([]);


      const updateComment = (e) => setComment(e.target.value);

//   useEffect(() => {

//     const errors = [];
//     if (!comment.length) {
//       errors.push("Comment on this project!");
//     }
//     setErrors(errors);
//   }, [comment]);

//   if (!user) return <Redirect to="/home" />;


//   useEffect(() => {

//         if (projectComment) {
//             setComment(projectComment);
//         }
//     }, [projectComment])


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (errors.length > 0) return;

    const updatedPayload = {
        commentId,
        comment
        // project_id:projects,
    };

    let updatedComment = await dispatch(editComment(updatedPayload));
    if (!updatedComment) {
        history.push(`/projects/${projectId}`)
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {/* {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
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
