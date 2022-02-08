import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getSteps} from '../../store/step'
import StepEditDelete from "../EditDeleteSteps";



const StepsForProject = ({stepsId}) => {
    const dispatch = useDispatch();


    useEffect(() => {
    //     async function save() {
    //      const deploySteps= await dispatch(getSteps(stepsId));
    //     }

    //    save();
    dispatch(getSteps(stepsId));

    }, [dispatch, stepsId])

    const bob = useSelector(state => state.step)
    const bobArray= Object.values(bob)
    console.log(getSteps(stepsId), 'HAHAHAHAHAHAHAHHAHAAH')

    const stepsFunction= useSelector(state => {
        const stepsArray=  Object.values(state.step)


    //need to filter here, when I dont steps will appear on each project until refresh.
      const filtered=  stepsArray.filter(step => step.project_id === stepsId)

        if(filtered){
            return filtered
        }
    })

    return (
        <div>
          <div id='rhetoric'>
          { stepsFunction.map((info) => {
                return (

                  <StepEditDelete key={info.id} info={info} photoId={info.project_id} />
                );

              })}
          </ div>
        </div>
      );

}


export default StepsForProject;
