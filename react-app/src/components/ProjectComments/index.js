import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";


const CommentsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  const user = useSelector((state) => state.session?.user?.id);
  const commentsObj = useSelector((state) => state.comments);
  console.log(commentsObj)
  const comments = Object.values(commentsObj);
  const userComments = comments.filter((comment) => comment.userId === user);
  console.log(comments)
  if (!user) return <Redirect to="/home" />;

  return (
    <div className="listContainer">
      <h1 className="commentsHeader">All comments</h1>
        {userComments.map((comment) => {
          return (
              comment
          );
        })}

      <div className="newCommentContainer">
        <NavLink className="newComment" to="/comments/new">New Comment</NavLink>
      </div>
    </div>
  );
};

export default CommentsList;
