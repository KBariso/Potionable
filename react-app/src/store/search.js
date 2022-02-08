

// Action type:
const SEARCH = "projects/SEARCH";

//Action Creator:
export const loadSearch = (payload) => ({
    type: SEARCH,
    payload
})


// Thunks

export const getSearch = (data) => async (dispatch) => {
    const response = await fetch(`/api/search/${data.search}`)

    if (response.ok) {
        const searchResults = await response.json()
        dispatch(loadSearch(searchResults))
    }
}


const searchReducer = (state = {}, action) => {
    let newState = { ... state }

    switch (action.type) {
        case SEARCH: {
            action.payload.forEach(project => {
                newState[project.id] = project;
            })
            return newState
        }
        default:
            return state;
    }
}

export default searchReducer
