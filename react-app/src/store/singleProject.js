const GET_ONE_PROJECT = "project/GET_ONE_PROJECT"
const CREATE_ONE_PROJECT = "project/CREATE_ONE_PROJECT"
const REMOVE="project/REMOVE"


const getSingle= (project) => ({
    type: GET_ONE_PROJECT,
    project
});

const createOneProject = (project) =>({
    type: CREATE_ONE_PROJECT,
    project
})

const removeProject = (projectId) => {
    return {
        type: REMOVE,
        projectId,
    };
};

export const getSingleProject = (id) => async (dispatch) => {
    const res = await fetch(`/api/projects/${id}`);
    if(res.ok){
        const project= await res.json();
        dispatch(getSingle(project));

    }
}

export const createNewProject = (project) => async (dispatch) => {
    const res = await fetch(`/api/projects/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project)
    })
    if (res.ok) {
        const project = await res.json();
        dispatch(createOneProject(project));
        return project
    }
}


export const removeProjectThunk = (projectId) => async (dispatch) => {
    const res = await fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(removeProject(projectId));
    }
  };


// const initialState={};
const project = (state= {}, action) => {
    let newState = { ...state };
    switch (action.type){
        case GET_ONE_PROJECT:{
            return{
                ...state,
                ...action.project,
            }
        }
        case CREATE_ONE_PROJECT: {
            return{
                ...state,
                [action.project.id]: action.project
            }
        }
        case REMOVE:{

            delete newState[ action.projectId];
            return newState;
        }
        default:{
            return state;
        }
    }
}


export default project
