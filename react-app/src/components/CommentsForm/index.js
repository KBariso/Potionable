import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { createNewComment } from "../../store/comments";
import { NavLink } from "react-router-dom";

const CreateNewComment = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user?.id)
    // const userId = user;


    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    const updateComment = (e) => setComment(e.target.value);



    useEffect(() => {
        const errors = [];
        if (!comment.length) {
            errors.push("Please provide a comment")
        }
        setErrors(errors)
    },[comment])

    if (!user) return <Redirect to="/home" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return;

        const payload = {
            comment
        };

        let createdComment = await dispatch(createNewComment(payload));
        if (createdComment) {
          history.push(`/comments`);
        }
      };


 return (
        <form className="form" onSubmit={handleSubmit}>
           {errors.length > 0 && (
               <ul className="errors">
                 {errors.map((error) => (
                   <li key={error}>{error}</li>
                 ))}
               </ul>
             )}
           <textarea className="commentInput"
               placeholder="Comment"
               type="text"
               value={comment}
               onChange={updateComment}
           />
           <button type="submit">Submit</button>
           <NavLink className="cancelCreateBtn" to="/project">Cancel</NavLink>
        </form>
 )

}

export default CreateNewComment;
