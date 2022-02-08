

// Action type:
const GET_ALL_PROJECTS = "projects/GET_ALL_PROJECTS";

// Action creators:
export const loadProjects = (projects) => ({
    type: GET_ALL_PROJECTS,
    projects,
})


// Thunks
export const getAllProjects = () => async (dispatch) => {
  const response = await fetch("/api/projects");
  // console.log('this is the response', response)

  if (response.ok) {
    const projects = await response.json();
    // console.log('plz work?', projects);
    dispatch(loadProjects(projects));
  }
};

// Reducer:

const allProjectsReducer = (state = {} , action) => {
    let newState = { ...state }

    switch (action.type) {
        case GET_ALL_PROJECTS: {
            action.projects.forEach(project => {
                newState[project.id] = project;
            })
            return newState
            }

        default:
            return state;
    }
  };

export default allProjectsReducer
