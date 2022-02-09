import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
// import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";
import CreateNewComment from "../CommentsForm";


const CommentsList = () => {
  const dispatch = useDispatch();
  const user_id = useParams()
  // console.log(user_id, "I AM COMMENTID!!!!!")
  // const userComment = commentId.user_id
  // console.log(userComment, "I AM THE USER COMMENT")
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const user = useSelector(state => state.session.user)
  const userId = user.id
  console.log(userId)
//   const commentsObj = useSelector((state) => state.comments);
//   console.log(commentsObj)
//   const comments = Object.values(commentsObj);
//   const projectComments = comments.filter((comment) => comment.projectId === user);
//   console.log(comments)
  const comments = useSelector((state) => {
      // console.log(state.comments, "HELLLOOOOO")
      return Object.values(state.comments)
  });
  console.log(comments, "I AM THE COMMENTS")
//   if (!user) return <Redirect to="/" />;

  return (
    <div className="commentsContainer">
      <h1 className="commentsHeader">All comments</h1>
        {comments?.map((comment) => {
           return (
            <p>{comment.comment}
            {comment.user_id === userId && <NavLink to={`/comments/${comment.id}/edit`}>Edit</NavLink>}
            </p>
           )
        })}

      <CreateNewComment />
    </div>
  );
};

export default CommentsList;
