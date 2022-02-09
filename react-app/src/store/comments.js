const GET_ALL_COMMENTS = "comments/GET_ALL_COMMENTS";
const CREATE_ONE_COMMENT = "comments/CREATE_ONE_COMMENT";
const EDIT_ONE_COMMENT = "comments/EDIT_ONE_COMMENT";
const DELETE_ONE_COMMENT = "comments/DELETE_ONE_COMMENT";


const loadAllComments = (comments) => ({
    type: GET_ALL_COMMENTS,
    comments,
})

export const getAllComments = () => async (dispatch) => {
    const res = await fetch(`/api/comments`);
    if (res.ok) {
        const comments = await res.json();
        dispatch(loadAllComments(comments));
        // return comments;
    }
}


const createOneComment = (comment) => ({
    type: CREATE_ONE_COMMENT,
    comment
})

export const createNewComment = (comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });
    if (res.ok) {
        const comment = await res.json();
        dispatch(createOneComment(comment));
        return comment
    }
}


const updateComment = (comment) => ({
    type: EDIT_ONE_COMMENT,
    comment
})


export const editComment = ({commentId, comment}) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({commentId, comment})
    })
    if (res.ok) {
        const updatedComment = await res.json();
        dispatch(updateComment(updatedComment));
      }
}

const deleteOneComment = (commentId) => ({
    type: DELETE_ONE_COMMENT,
    commentId,
  })

  export const deleteComment = ( commentId ) => async dispatch => {
    const res = await fetch (`/api/comments/${commentId}`, {
      method: "DELETE",

    });
    if (res.ok) {

      dispatch(deleteOneComment(commentId));
    }
  }



const initialState = {};
const commentsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_COMMENTS:
            action.comments.forEach(comment => {
                newState[comment.id] = comment;
            })
            return {...state, ...newState}
        case CREATE_ONE_COMMENT:
            return {...state, [action.comment.id]: action.comment}
        case EDIT_ONE_COMMENT:
            return {...state, [action.comment.id]: action.comment}
        case DELETE_ONE_COMMENT:
            newState = {...state};
            delete newState[action.commentId];
            return newState
        default:
            return state;
    }
}

export default commentsReducer;
