const GET_ONE_PROJECT = "project/GET_ONE_PROJECT"


const getSingle= (project) => ({
    type: GET_ONE_PROJECT,
    project
});

export const getSingleProject = (id) => async (dispatch) => {
    const res = await fetch(`/api/projects/${id}`);
    if(res.ok){
        const project= await res.json();
        dispatch(getSingle(project));

    }
}


const initialState={};
const project = (state= initialState, action) => {
    switch(action.type){
        case GET_ONE_PROJECT:{
            return{
                ...state,
                ...action.project,

            }
        }
        default:
            return state;
    }
}


export default project
