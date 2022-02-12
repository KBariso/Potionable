import { useSelector, useDispatch } from 'react-redux';
// import { deleteComment } from '../../store/comments';
// import EditComment from '../EditComment';
import { useEffect, useState } from 'react';
import { getAllComments } from '../../store/comments';

import EditComment from '../EditComment';
import {deleteComment} from '../../store/comments'
import DeleteComment from '../DeleteComment';



const CommentFunctions = ({info, projectId, userName}) => {
    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    const userId = user?.id


    const username= user?.username
    const commentId= info.user_id

    console.log(userName, "THIS IS INDO")

    const userComment= username === commentId


 useEffect(() => {
    dispatch(getAllComments(projectId));
  }, [dispatch, projectId]);

    const [edit, setEdit] = useState(false);

    const preSession= info?.user_id
    const sessionId = userId === preSession

const handleDelete = (e) => {
    e.preventDefault();
  const deleteInfo =dispatch(deleteComment(info.id))
  if (deleteInfo){
dispatch(getAllComments)
  window.location.reload();

  }

}
console.log(user?.username, "THIS IS INFO")

return (
    <div>
      <div id="hotAir">
          {!edit &&
            <p className='pComments'key={info.id}>
              {info.comment}
              {/* {userComment} */}

            </p>}

          {( sessionId && !edit) && <button className='editCommentButton' onClick={() => setEdit(!edit)}>Edit Comment</button>}
          { (sessionId ) &&<button className='editDeleteButton' onClick={handleDelete}>Delete Comment</button>}
          {/* <DeleteComment /> */}
          <div>
            {edit && <EditComment info={info} hideForm={() => setEdit(false)} /> }
            </div>
            <br />
      </ div>
    </div>
  );

          }
export default CommentFunctions;
