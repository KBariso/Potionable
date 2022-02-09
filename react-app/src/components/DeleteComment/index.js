import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {deleteComment} from '../../store/comments'


const DeleteComment = ({commentId}) => {
    const history = useHistory();
    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    const userId = user?.id


    const theCommentId = useSelector((state) => {
       const stepsArray= Object.values(state.steps);
       const filtered= stepsArray.filter(step => step.id === commentId)
       return filtered
    })



    const preSession= commentId?.userId
    const sessionId = userId === preSession

const handleDelete = (e) => {
    e.preventDefault();
  const deleteInfo =dispatch(deleteComment(commentId))
  if(deleteInfo && sessionId){
    history.push("/");
  }

}


return (
    <div>
          {(userId ) && <button className='deleteButton' onClick={handleDelete}>Delete Comment</button>}
    </div>
  );

          }
export default DeleteComment;