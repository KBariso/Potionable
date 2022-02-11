import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {deleteStep} from '../../store/step'


const StepsManage = ({stepzId}) => {
    const history = useHistory();
    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    const userId = user?.id
    // const {stepId}= useParams()

    const stepId = useSelector((state) => {
       const stepsArray= Object.values(state.steps);
       const filtered= stepsArray.filter(step => step.id === stepzId)
       return filtered
    })

    // const stepIdArray= Object.values(stepId)



    // const steps = useSelector((state) => {
    //     const stepsArray= Object.values(state.steps);
    //     const filtered= stepsArray.filter(step => step.project_id === projectsId)

    //     return filtered

    //   });


    const preSession= stepzId?.user_id
    const sessionId = userId === preSession

const handleDelete = (e) => {
    e.preventDefault();
  const deleteInfo =dispatch(deleteStep(stepzId))
  if(deleteInfo && sessionId){
    history.push("/");
  }

}


return (
    <div>
          {(userId && sessionId ) && <button className='deleteButton' onClick={handleDelete}>Delete Step</button>}
    </div>
  );

          }
export default StepsManage;
