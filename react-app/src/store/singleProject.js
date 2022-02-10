const GET_ONE_PROJECT = "project/GET_ONE_PROJECT"
const REMOVE="project/REMOVE"
const EDIT_ONE_PROJECT = "projects/EDIT_ONE_PROJECT";

const getSingle= (project) => ({
    type: GET_ONE_PROJECT,
    project
});

const removeProject = (projectId) => {
    return {
        type: REMOVE,
        projectId,
    };
};

const updateProject = (project) => ({
    type: EDIT_ONE_PROJECT,
    project
})

export const getSingleProject = (id) => async (dispatch) => {
    const res = await fetch(`/api/projects/${id}`);
    if(res.ok){
        const project= await res.json();
        dispatch(getSingle(project));

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

  export const editProjects = ({projectId, project}) => async (dispatch) => {
    const res = await fetch(`/api/projects/${projectId}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({projectId, project})
    })
    if (res.ok) {
        const updatedProject = await res.json();
        dispatch(updateProject(updatedProject));
      }
}


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
        case EDIT_ONE_PROJECT:
            return {...state, [action.project.id]: action.project}
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
