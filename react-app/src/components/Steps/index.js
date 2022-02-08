import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getSteps} from '../../store/step'




const StepsForProject = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSteps());
  }, [dispatch]);

  const steps = useSelector((state) => {
    return Object.values(state.steps);
  });
// const steps = useSelector(state => state.steps);
  console.log("TEST FROM ALL PROJECTS", steps);

  return (




<>

          {steps.map((step) =>{
              return (
                  <>
              <div>{step.title}</div>
              <div>{step.body}</div>
              </>
              );
              })}


</>



  );

}


export default StepsForProject;
