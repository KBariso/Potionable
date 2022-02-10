import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
// import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";
import CreateNewComment from "../CommentsForm";
import DeleteComment from "../DeleteComment";

const CommentsList = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  console.log(projectId, "heehee");
  // const oneComment = useSelector((state) => state.comments);
  // // console.log(oneComment[commentId].user_id, "I AM THE ONE COMENNT")
  // const projectId = oneComment[commentId]
  // console.log(oneComment, "in the project comments")

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  // console.log(userId)
  //   const commentsObj = useSelector((state) => state.comments);
  //   console.log(commentsObj)
  //   const comments = Object.values(commentsObj);
  //   const projectComments = comments.filter((comment) => comment.projectId === user);
  //   console.log(comments)
  const comments = useSelector((state) => {
    // console.log(state.comments, "HELLLOOOOO")
    return Object.values(state.comments);
  });
  console.log(comments, "I AM THE COMMENTS");
  //   if (!user) return <Redirect to="/" />;

  return (
    <div className="commentsContainer">
      <CreateNewComment />
      <h1 className="commentsHeader">All comments</h1>
      {comments?.map((comment) => {
        return (
          <div>
            {comment.project_id == projectId ? <p>{comment.comment}</p> : null}
            {comment.user_id === userId && comment.project_id == projectId ? (
              <NavLink to={`/comments/${comment.id}/edit`}>Edit</NavLink>) : null}
            <DeleteComment commentId={comment.id} commentUserId={comment.user_id} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
