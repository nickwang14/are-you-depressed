// Action Type Imports
import {SET, REMOVE, RESET} from "../actions/home-actions";

const initialState = {
    points:[],
    question: 0,
};

// Home Page's Reducer
export default function homeReducer(state=initialState, action) {
    console.warn(action)
    switch (action.type) {
        case SET:
            const completedQuestions = state.question >= 21
            const addpoints = completedQuestions ? state.points : [...state.points, action.payload]
            const addquestion = completedQuestions ? state.question : state.question +1

            return { 
                ...state, 
                points: addpoints,
                question: addquestion,
            };

        case REMOVE:
            const firstQuestion = state.question === 0
            const removepoints = firstQuestion ? [] : state.points.slice(0, -1)
            const removequestion = firstQuestion ? state.question : state.question -1   
            console.warn({
                firstQuestion,
                removepoints,
                removequestion
            })

            return { 
                ...state, 
                points: removepoints,
                question: removequestion,
            };

        case RESET:
            return { 
                points: [],
                question: 0,
            };

        default:
            return {...state};
    }
};



