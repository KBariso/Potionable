

const GET = 'steps/GET';
const REMOVE = 'steps/REMOVE'




  const getStep = steps => ({
      type: GET,
      steps,
    });

    const removeStep = stepId => ({
        type: REMOVE,
        stepId,
      });



    export const getSteps = () => async dispatch => {
        const response = await fetch(`/api/steps`);


        if (response.ok) {
          const steps = await response.json();
          dispatch(getStep(steps));

        }
      };

      export const deleteStep = (stepId) => async dispatch => {
        const response = await fetch(`/api/steps/${stepId}`, {
          method: 'DELETE',

        })
        if (response.ok) {
          dispatch(removeStep(stepId))
        //   return true
        }
      }






      const stepReducer = (state = {}, action) => {
        let newState = { ...state }
        switch (action.type) {
            case GET: {
                action.steps.forEach(step => {
                    newState[step.id] = step;
                })
                return newState
                }
                case REMOVE: {
                    const newState = { ...state };
                    delete newState[ action.stepId];
                    return newState;
                  }


          default: {
            return state;
        }
        }
      }

      export default stepReducer;
