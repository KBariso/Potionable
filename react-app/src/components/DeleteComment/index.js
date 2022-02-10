import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';
import {deleteComment} from '../../store/comments'


const DeleteComment = ({commentId, commentUserId}) => {
    const history = useHistory();
    const dispatch= useDispatch()
    const { projectId } = useParams()
    console.log(projectId)
    const user = useSelector(state => state.session.user);
    const userId = user?.id
    const oneComment = useSelector((state) => state.comments);
    const commentUser= oneComment[commentId].user_id
    const commentsProjectId = oneComment[commentId].project_id


    const theCommentId = useSelector((state) => {
       const stepsArray= Object.values(state.steps);
       const filtered= stepsArray.filter(step => step.id === commentId)
       return filtered
    })
    // console.log(theCommentId)



    const preSession= commentId?.userId
    const sessionId = userId === preSession

const handleDelete = (e) => {
    e.preventDefault();
  const deleteInfo =dispatch(deleteComment(commentId))
  if(deleteInfo && sessionId){
    history.push("/");
  }

}
// (userId === commentUser && commentsProjectId === projectId) &&

return (
    <div>
          {(userId== commentUserId && commentsProjectId == projectId) && <button className='deleteButton' onClick={handleDelete}>Delete Comment</button>}
    </div>
  );

          }
export default DeleteComment;
