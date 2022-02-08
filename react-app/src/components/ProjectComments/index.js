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
//   const commentsObj = useSelector((state) => state.comments);
//   console.log(commentsObj)
//   const comments = Object.values(commentsObj);
//   const userComments = comments.filter((comment) => comment.userId === user);
//   console.log(comments)
  const comments = useSelector((state) =>{
      return Object.values(state.comments)
  });
  if (!user) return <Redirect to="/" />;

  return (
    <div className="listContainer">
      <h1 className="commentsHeader">All comments</h1>
        {comments?.map((comment) => {
            <p>{comment.comment}</p>
        })}
    </div>
  );
};

export default CommentsList;


// const AllProjects = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//       dispatch(getAllProjects());
//     }, [dispatch]);

//     const projects = useSelector((state) => {
//       return Object.values(state.projects);
//     });
//     console.log("TEST FROM ALL PROJECTS", projects);

//     return (
//       <div>
//         {projects?.map((project) => (
//           <Link key={project.id} to={`/projects/${project.id}`}>
//             <p> {project.title} </p>
//             <img src={project.media_url} />
//           </Link>
//         ))}
//       </div>
//     );
//   };
