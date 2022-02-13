import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment, getAllComments } from "../../store/comments";
import { NavLink } from "react-router-dom";
import './EditComment.css'




const EditComment = ({info,commentsProp, hideForm}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const commentId = info.id
  // const projectId = commentsProp.project_id

  // console.log(commentId, "I AM THE COMMENT ID!!!!!!!!!!")
  // console.log(projectId, "I AM THE PROJECTID!!!!")
  // console.log(commentsProp, "I AM THE COMMENT!!!!")


      const [comment, setComment] = useState(info.comment);
      const [errors, setErrors] = useState([]);

      // const updateComment = (e) => setComment(e.target.value);


    //   useEffect(() => {
    //     dispatch(getAllComments());
    // }, [dispatch]);



      // useEffect(() => {

      //   if (commentsProp) {
      //       setComment(commentsProp.comment);
      //   }
      // }, [commentsProp])




  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (errors.length > 0) return;

    const updatedPayload = {
      comment_id:commentId,
        comment

    };

    if (!comment) {
      setErrors(["Did you drink a forgetfulness potion? You have no comment!"]);
    } else if (comment.length <= 3) {
      setErrors(["Your comment length is too short"]);
    }
       else {
      setErrors([]);


    let updatedComment = await dispatch(editComment(updatedPayload)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });;

    if (updatedComment) {
      dispatch(getAllComments())
        // history.push(`/projects/${projectId}`)
        hideForm()
        // window.location.reload();


    }
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
        <div className="EditCommentInput">
          <div>
            <textarea
              className="commentEditInput"
              placeholder="Comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditComment;
