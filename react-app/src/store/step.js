

const GET = 'steps/GET';





  const getStep = steps => ({
      type: GET,
      steps,
    });



    export const getSteps = () => async dispatch => {
        const response = await fetch(`/api/steps`);


        if (response.ok) {
          const steps = await response.json();
          dispatch(getStep(steps));

        }
      };






      const stepReducer = (state = {}, action) => {
        let newState = { ...state }
        switch (action.type) {
            case GET: {
                action.steps.forEach(step => {
                    newState[step.id] = step;
                })
                return newState
                }


          default: {
            return state;
        }
        }
      }

      export default stepReducer;
