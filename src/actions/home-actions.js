// Action Types
export const SET = "SET";
export const REMOVE = "REMOVE";
export const RESET = "RESET";

/* Home Page's Actions */

// Add Points
export function setPoints(points) {
    return dispatch => {
        dispatch({
            type: SET,
            payload: points
        })
    };
}

// Return an index
export function removePoints() {
console.warn('remove')
    return dispatch => {
        dispatch({
            type: REMOVE,
        })
    };
}

// Reset reducer
export function reset() {
    return dispatch => {
        dispatch({
            type: RESET,
        })
    };
}
