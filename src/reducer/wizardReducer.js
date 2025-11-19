export const initialState = {
    currentStep: 1,
    formData: {},
};

export function wizardReducer(state, action) {
    switch (action.type) {
        case 'NEXT_STEP':
            return { ...state, currentStep: state.currentStep + 1 };

        case 'PREV_STEP':
            return { ...state, currentStep: state.currentStep - 1 };

        case 'UPDATE_FORM_DATA':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                },
            };

        case 'RESET_FORM':
            return { currentStep: 1, formData: {} };

        default:
            return state;
    }
}


// export const initialState = {
//     currentStep: 1,
//     formData: {},
// };


// export function wizardReducer(state, action) {
//     switch (action.type) {
//         case 'NEXT_STEP':
//             return { ...state, currentStep: state.currentStep + 1 };

//         case 'PREV_STEP':
//             return { ...state, currentStep: state.currentStep - 1 };

//         case 'UPDATE_FORM_DATA':
//             return {
//                 ...state, formData: {
//                     ...state.formData,
//                     ...action.payload
//                 },
//             };

//         case 'RESET_FORM':
//             return { ...initialState, currentStep: 1 }

//         default: 
//         return state;
//     }

// }

