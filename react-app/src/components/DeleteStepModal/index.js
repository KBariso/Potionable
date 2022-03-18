import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteStep} from '../../store/step'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './DeleteStepModal.css'


const DeleteStepModal = ({stepsProp}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams()
    // const stepId = useParams()
    console.log(id)

    const stepObj = Object.values(stepsProp)
    console.log(stepObj[0].id)

    const stepId = stepObj[0].id

    // const stepId = useSelector((state) => {

    //     const stepsArray= Object.values(state.steps);
    //     console.log(stepsArray)
    //     const filtered= stepsArray.filter(step => step.id )
    //     return filtered
    //  })
    // //  console.log(stepId)

    const onDelete = (e) => {
        e.preventDefault();
        const deleteInfo = dispatch(deleteStep(stepId))
    }

  return (
      <>
        <div className='DeleteOneStepFromModalContainer'>
            <h1>Are you sure you want to delete this step?</h1>
            <button className='DeleteOneStepFromModal' type="submit" onClick={onDelete}>
                        Delete
            </button>
        </div>
      </>

  );
};

export default DeleteStepModal
