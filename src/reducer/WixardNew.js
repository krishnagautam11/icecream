// Load stored values (if available)
const storedForm = JSON.parse(localStorage.getItem("icecreamForm")) || {};
const storedStep = Number(localStorage.getItem("currentStep")) || 1;

export const initialState = {
    currentStep: storedStep,
    formData: storedForm,
};

export function wizardReducer(state, action) {
    switch (action.type) {
        case "NEXT_STEP": {
            const nextStep = state.currentStep + 1;
            localStorage.setItem("currentStep", nextStep);
            return { ...state, currentStep: nextStep };
        }

        case "PREV_STEP": {
            const prevStep = state.currentStep - 1;
            localStorage.setItem("currentStep", prevStep);
            return { ...state, currentStep: prevStep };
        }

        case "UPDATE_FORM_DATA": {
            const updatedData = {
                ...state.formData,
                ...action.payload,
            };

            localStorage.setItem("icecreamForm", JSON.stringify(updatedData));

            return { ...state, formData: updatedData };
        }

        case "RESET_FORM": {
            localStorage.removeItem("icecreamForm");
            localStorage.removeItem("currentStep");
            return { currentStep: 1, formData: {} };
        }

        default:
            return state;
    }
}
