const GET = "steps/GET";
const REMOVE = "steps/REMOVE";
const CREATE = "steps/CREATE";

const getStep = (steps) => ({
  type: GET,
  steps,
});

const removeStep = (stepId) => ({
  type: REMOVE,
  stepId,
});

const createStep = (step) => ({
  type: CREATE,
  step
})

export const getSteps = () => async (dispatch) => {
  const response = await fetch(`/api/steps`);

  if (response.ok) {
    const steps = await response.json();
    dispatch(getStep(steps));
  }
};

export const deleteStep = (stepId) => async (dispatch) => {
  const response = await fetch(`/api/steps/${stepId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(removeStep(stepId));
    //   return true
  }
};

export const createOneStep = ({ title, body, project_id }) => async (dispatch) => {
  // alert(project_id)
  const response = await fetch(`/api/steps`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({title, body, project_id}),
  })
  if (response.ok) {
    const step = await response.json();
    dispatch(createStep(step))
    return step
  }
}


const stepReducer = (state = {}, action) => {
  let newState = { ...state };
  // alert(JSON.stringify(action))
  switch (action.type) {
    case GET: {
      action.steps.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    }
    case REMOVE: {
      const newState = { ...state };
      delete newState[action.stepId];
      return newState;
    }
    case CREATE: {
        return {...state, [action.step.id]: action.step}
    }

    default: {
      return state;
    }
  }
};

export default stepReducer;
