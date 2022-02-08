

const GET = 'steps/GET';
const ADD = 'steps/ADD';
const UPDATE = 'steps/UPDATE'
const REMOVE = 'steps/REMOVE'


const removeStep = stepId => ({
    type: REMOVE,
    stepId,
  });


  const getStep = steps => ({
      type: GET,
      steps,
    });

    const addStep =step => ({
      type: ADD,
      step,
    });


    export const getSteps = () => async dispatch => {
        const response = await fetch(`/api/steps`);


        if (response.ok) {
          const steps = await response.json();
          dispatch(getStep(steps));

        }
      };

    export const editStep = (info) => async dispatch => {
        const response = await fetch(`/api/projects/${info.id}/steps`, {
          method: 'PUT',
          body: JSON.stringify(info),
        })
        if (response.ok) {
          const editedStep = await response.json();
          dispatch(addStep(editedStep))
          return editedStep;
        }
      }

    export const deleteStep = (step) => async dispatch => {
    const response = await fetch(`/api/projects/${step.id}/steps`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(step),
    })
    if (response.ok) {
      dispatch(removeStep(step.id))
      return true
    }
  }

  const initialState = {};

      const stepReducer = (state = initialState, action) => {
        const allSteps = {...state};
        switch (action.type) {
          case GET: {
            return{
                ...state,
                ...action.steps,

            }
          }

        //   case UPDATE:{
        //     return {
        //         ...state,
        //         [action.step.id]: {
        //           ...state[action.step.id],
        //           ...action.step,
        //         }
        //       };
        //   }
        //   case REMOVE: {
        //     const newState = { ...state };
        //     delete newState[ action.stepId];
        //     return newState;
        //   }
          default: {
            return state;
        }
        }
      }

      export default stepReducer;
