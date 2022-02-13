import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
// import { NavLink, Redirect } from "react-router-dom";
import { getAllComments } from "../../store/comments";
import CreateNewComment from "../CommentsForm";
import DeleteComment from "../DeleteComment";
import EditComment from "../EditComment";

import './ProjectComments.css'

import CommentFunctions from "../CommentFunctions";


const CommentsList = ({hideForm, projectId}) => {
  const dispatch = useDispatch();
  // const { projectId } = useParams();
  // console.log(projectId, "heehee");

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(getAllComments(projectId));
  }, [dispatch, projectId]);

  const user = useSelector((state) => state.session.user);
  const userId = user?.id;


  const comments = useSelector((state) => {
    // console.log(state.comments, "HELLLOOOOO")
   const commentArray =Object.values(state.comments);
   const filtered = commentArray.filter(comment=> comment.project_id === projectId)

   if(filtered){
     return filtered
   }
  });



  // const comment = useSelector(state => state.comments)
  // console.log(comment.comment)

  return (
    <div className="commentsContainer">



      {/* <CreateNewComment /> */}
      <hr className="linebreak"/>
      <div className="commentsHeaderContainer">
        <h1 className="commentsHeader">All comments</h1>
      </div>
      {comments?.map((comment) => {
        return (

          // <div>
          //   {comment.project_id == projectId ? <p>{comment.comment}</p> : null}
          //   {edit && comment.user_id === userId && comment.project_id == projectId ?
          //        <EditComment commentsProp={comment} hideForm={() => setEdit(false)}/> : null}
          //   {/* <EditComment commentsProp={comment}/> */}
            // <DeleteComment commentId={comment.id} commentUserId={comment.user_id} />
          //   {( !edit) && <button className='editProjectButton' onClick={() => setEdit(!edit)}>Edit Comment</button>}
          // </div>
          <>
          {/* <EditComment commentsProp={comment}/>
          <DeleteComment commentId={comment.id} commentUserId={comment.user_id} /> */}
            <CommentFunctions key={comment.id} info={comment} projectId={comment.project_id} userName={user?.username} />
          </>

        );
      })}

    </div>
  );
};

export default CommentsList;
