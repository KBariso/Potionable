import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
// import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";
import CreateNewComment from "../CommentsForm";
import DeleteComment from "../DeleteComment";
import EditComment from "../EditComment";
import './ProjectComments.css'

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
  const [edit, setEdit] = useState(false);

    // const commentsObj = useSelector((state) => state.comments);
    // console.log(Object.values(commentsObj.id), "COMMENTS OBJ")
  //   const comments = Object.values(commentsObj);
  const comments = useSelector((state) => {
    return Object.values(state.comments);
  });
  // console.log(comments, "I AM THE COMMENTS");
  //   const projectComments = comments.filter((comment) => comment.comment == user);
  //   console.log(projectComments)
  //   if (!user) return <Redirect to="/" />;

  // const comment = useSelector(state => state.comments)
  // console.log(comment.comment)

  return (
    <div className="commentsContainer">
      <h1 className="commentsHeader">All comments</h1>
      <div className="allCommentsContainer">
        {comments?.map((comment) => {
          return (
            <div className="singleCommentsContainer">
              {comment.project_id == projectId ? <p className="SingleComment">{comment.comment}</p> : null}
              <div className="EditandDelete">
                {( !edit) && comment.user_id === userId && comment.project_id == projectId ? <button className="editCommentButton" onClick={() => setEdit(!edit)}>Edit Comment</button> : null}
                {edit && comment.user_id === userId && comment.project_id == projectId ? <EditComment commentsProp={comment} hideForm={() => setEdit(false)}/> : null}
              <DeleteComment commentId={comment.id} commentUserId={comment.user_id} />
              </div>
            </div>
          );
        })}
      </div>

      <CreateNewComment />
    </div>
  );
};

export default CommentsList;
