import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";


const CommentsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

//   const user = useSelector((state) => state.session?.user?.id);
//   const commentsObj = useSelector((state) => state.comments);
//   console.log(commentsObj)
//   const comments = Object.values(commentsObj);
//   const projectComments = comments.filter((comment) => comment.projectId === user);
//   console.log(comments)
  const comments = useSelector((state) => {
      console.log(state.comments, "HELLLOOOOO")
      return Object.values(state.comments)
  });
//   if (!user) return <Redirect to="/" />;

  return (
    <div className="commentsContainer">
      <h1 className="commentsHeader">All comments</h1>
        {comments?.map((comment) => {
            <p>{comment.comment}</p>
        })}
    </div>
  );
};

export default CommentsList;
