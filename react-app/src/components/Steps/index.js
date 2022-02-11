import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSteps } from "../../store/step";
import StepsManage from "../StepsManage";
import "./Steps.css";

const StepsForProject = ({ projectsId, projectUserId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSteps());
  }, [dispatch]);

  const steps = useSelector((state) => {
    const stepsArray = Object.values(state.steps);
    const filtered = stepsArray.filter(
      (step) => step.project_id === projectsId
    );

    return filtered;
  });
  // const steps = useSelector(state => state.steps);
    console.log("TEST FROM ALL PROJECTS", projectUserId );

  return (
    <div className="AllSteps">
      <div className="allStepsContainer">
        <div>
          {steps.map((step) => {
            return (
              // <div className="stepsContainer">
                <div className="titleContainer">
                    <div className="stepTitle">{step.title}</div>
                      <div className="stepBodyContainer">
                        <div className="stepBody">{step.body}</div>
                      </div>
                {/* </div> */}
                <StepsManage stepzId={step.id} projectId={step.project_id} projectUserId ={projectUserId} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepsForProject;
