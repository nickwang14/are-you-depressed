// Action Type Imports
import {SET_SETTINGS} from "../actions/settings-actions";

const initialState = {
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true,
        fontSize: 17,
    },
    palette : {
        primary: {
            light: '#757de8',
            main: '#3f51b5',
            dark: '#002984',
            //contrastText: '#fff',
        },
        secondary: {
            light: '#8e99f3',
            main: '#5c6bc0',
            dark: '#26418f',
            //contrastText: '#fff',
        },
        type: 'dark',
    },
    shape: {
        borderRadius: 8,
      },
};
// Settings Reducer
export default function settingsReducer(state=initialState, action) {
    switch (action.type) {
        case SET_SETTINGS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
