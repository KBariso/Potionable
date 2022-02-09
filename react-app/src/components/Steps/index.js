import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getSteps} from '../../store/step'
import StepsManage from "../StepsManage";




const StepsForProject = ({projectsId}) => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSteps());
  }, [dispatch]);

  const steps = useSelector((state) => {
    const stepsArray= Object.values(state.steps);
    const filtered= stepsArray.filter(step => step.project_id === projectsId)

    return filtered

  });
// const steps = useSelector(state => state.steps);
//   console.log("TEST FROM ALL PROJECTS", steps);

  return (




<>

          {steps.map((step) =>{
              return (
                  <>
              <div>{step.title}</div>
              <div>{step.body}</div>
              <StepsManage stepzId={step.id} />
              </>
              );
              })}


</>



  );

}


export default StepsForProject;
