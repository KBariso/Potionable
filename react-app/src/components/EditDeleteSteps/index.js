import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {deleteStep} from '../../store/step'
import EditStep from '../EditStep';


const StepEditDelete = ({info}) =>{
    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    const userId = user?.id

    const [edit, setEdit] = useState(false);

    const preSession= info?.userId
    const sessionId = userId === preSession


    const handleDelete = (e) => {
        e.preventDefault();
      const deleteInfo =dispatch(deleteStep(info))
      if(sessionId){
      return deleteInfo
      }
    }

    return (
        <div>
          <div >
              {!edit &&
                <p className='pComments'key={info.id}>
                  {info.title}
                  {info.body}
                </p>}

              {(sessionId && !edit) && <button onClick={() => setEdit(!edit)}>Edit Step</button>}
              {(sessionId ) && <button  onClick={handleDelete}>Delete Step</button>}
              <div>
                {edit && <EditStep info={info} hideForm={() => setEdit(false)} /> }
                </div>
                <br />
          </ div>
        </div>
      );
}



export default StepEditDelete
