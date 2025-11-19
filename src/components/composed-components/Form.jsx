import { useState, useReducer } from "react";
import { initialState, wizardReducer } from "../../reducer/wizardReducer";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

export const Form = () => {
    const [state, dispatch] = useReducer(wizardReducer, initialState);
    const { currentStep, formData } = state;
    const [errors, setErrors] = useState({});

    // VALIDATIONS
    function validateStepOne(stepData) {
        let errors = {};
        if (!stepData.base) errors.base = "Please select a base for your ice-cream";
        return errors;
    }

    function validateStepTwo(stepData) {
        let errors = {};
        if (!stepData.mixins) errors.mixins = "Please select mixins";
        if (!stepData.toppings) errors.toppings = "Please select toppings";
        return errors;
    }

    const validateCurrentStep = (stepData) => {
        switch (currentStep) {
            case 1:
                return validateStepOne(stepData);
            case 2:
                return validateStepTwo(stepData);
            default:
                return {};
        }
    };

    // Next button
    const handleNext = (stepData) => {
        const validationError = validateCurrentStep(stepData);

        if (Object.keys(validationError).length === 0) {
            dispatch({ type: "UPDATE_FORM_DATA", payload: stepData });
            dispatch({ type: "NEXT_STEP" });
            setErrors({});
        } else {
            setErrors(validationError);
        }
    };

    // Previous button
    const handlePrev = () => {
        dispatch({ type: "PREV_STEP" });
    };

    // Render each step component
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <StepOne
                        formData={formData}
                        onNext={handleNext}
                        errors={errors}
                    />
                );
            case 2:
                return (
                    <StepTwo
                        formData={formData}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        errors={errors}
                    />
                );
            case 3:
                return (
                    <StepThree
                        formData={formData}
                        dispatch={dispatch}   // IMPORTANT for reset button
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={`wizard-form-conatiner step-${currentStep}`}>
            <div className="wizard-form">

                {/* STEP INDICATOR */}
                <div className="progress-wrapper">
                    <div className={`progress-step ${currentStep >= 1 ? "active" : ""}`}>1</div>
                    <div className={`progress-step ${currentStep >= 2 ? "active" : ""}`}>2</div>
                    <div className={`progress-step ${currentStep >= 3 ? "active" : ""}`}>3</div>
                </div>

                <h3>Step - {currentStep}</h3>

                <div className="step-content">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
};


// import { useState, useReducer } from "react";
// import { initialState, wizardReducer } from "../../reducer/wizardReducer";
// import { StepOne } from "./StepOne";
// import { StepTwo } from "./StepTwo";
// import { StepThree } from "./StepThree";

// export const Form = () => {
//     const [state, dispatch] = useReducer(wizardReducer, initialState);
//     const { currentStep, formData } = state;
//     const [errors, setErrors] = useState({});

//     // VALIDATIONS
//     function validateStepOne(stepData) {
//         let errors = {};
//         if (!stepData.base) errors.base = "Please select a base for your ice-cream";
//         return errors;
//     }

//     function validateStepTwo(stepData) {
//         let errors = {};
//         if (!stepData.mixins) errors.mixins = "Please select mixins";
//         if (!stepData.toppings) errors.toppings = "Please select toppings";
//         return errors;
//     }

//     const validateCurrentStep = (stepData) => {
//         switch (currentStep) {
//             case 1:
//                 return validateStepOne(stepData);
//             case 2:
//                 return validateStepTwo(stepData);
//             default:
//                 return {};
//         }
//     };

//     // Next Button
//     const handleNext = (stepData) => {
//         const validationError = validateCurrentStep(stepData);

//         if (Object.keys(validationError).length === 0) {
//             dispatch({ type: "UPDATE_FORM_DATA", payload: stepData });
//             dispatch({ type: "NEXT_STEP" });
//             setErrors({});
//         } else {
//             setErrors(validationError);
//         }
//     };

//     // Prev Button
//     const handlePrev = () => {
//         dispatch({ type: "PREV_STEP" });
//     };

//     // Submit (Step 3 → final)
//     const handleSubmit = (stepData) => {
//         const validationError = validateCurrentStep(stepData);

//         if (Object.keys(validationError).length === 0) {
//             dispatch({ type: "UPDATE_FORM_DATA", payload: stepData });
//             dispatch({ type: "NEXT_STEP" });
//         } else {
//             setErrors(validationError);
//         }
//         console.log("Submitting form data:", formData);
//     };

//     const renderStep = () => {
//         switch (currentStep) {
//             case 1:
//                 return <StepOne formData={formData} onNext={handleNext} errors={errors} />;
//             case 2:
//                 return <StepTwo formData={formData} onNext={handleNext} onPrev={handlePrev} errors={errors} />;
//             case 3:
//                 return <StepThree formData={formData} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className={`wizard-form-conatiner step-${currentStep}`}>
//             <div className="wizard-form">

//                 {/* STEP INDICATOR */}
//                 <div className="progress-wrapper">
//                     <div className={`progress-step ${currentStep >= 1 ? "active" : ""}`}>1</div>
//                     <div className={`progress-step ${currentStep >= 2 ? "active" : ""}`}>2</div>
//                     <div className={`progress-step ${currentStep >= 3 ? "active" : ""}`}>3</div>
//                 </div>

//                 <h3>Step - {currentStep}</h3>

//                 <div className="step-content">{renderStep()}</div>
//             </div>
//         </div>
//     );
// };



// import { useState, useReducer } from "react";
// import { initialState, wizardReducer } from "../../reducer/wizardReducer";
// import { StepOne } from "../../components/composed-components/StepOne";
// import { StepTwo } from "../../components/composed-components/StepTwo";
// import { StepThree } from "../../components/composed-components/StepThree";


// export const Form = () => {
//     const [state, dispatch] = useReducer(wizardReducer, initialState);
//     const { currentStep, formData } = state;
//     const [errors, setErrors] = useState({});


//     function validateStepOne(stepData) {
//         let errors = {};

//         if (!stepData.base || stepData.base === '') {
//             errors.base = 'Please select a base for your ice-cream';
//         }
//         return errors;
//     }

//     function validateStepTwo(stepData) {
//         let errors = {};

//         if (!stepData.mixins || stepData.mixins === '') {
//             errors.mixins = 'Please select mixins for your ice-cream';
//         }
//         if (!stepData.toppings || stepData.toppings === '') {
//             errors.toppings = 'Please select toppings for your ice-cream';
//         }
//         return errors;
//     }



//     const validateCurrentStep = (stepData) => {
//         let validationError = {}; 

//         switch (currentStep) {
//             case 1:
               
//                 validationError = validateStepOne(stepData);
//                 break;
//             case 2:
               
//                 validationError = validateStepTwo(stepData);
//                 break;
//             case 3:
              
//                 break;
//             default:
              
//                 break;
//         }

      
//         return validationError;
//     }
//     const handleNext = (stepData) => {

//         if (!stepData) {
//             console.log('stepData is undefined', stepData);
//         }

//         const validationError = validateCurrentStep(stepData)
//         if (Object.keys(validationError).length === 0) {
//             dispatch({ type: "UPDATE_FORM_DATA", payload: stepData });
//             dispatch({ type: "NEXT_STEP" });
//             setErrors({})
//         } else {
//             setErrors(validationError)
//         }
//         return errors;

//     }

//     const handlePrev = () => {
//         dispatch({ type: "PREV_STEP" });
//     };

//     const handleReset = () => {
//         dispatch({ type: "RESET_FORM" })
//     }

//     const handleSubmit = (stepData) => {
//         const validationError = validateCurrentStep()
//         if (Object.keys(validationError).length === 0) {
//             dispatch({ type: "UPDATE_FORM_DATA", payload: stepData });
//             dispatch({ type: "NEXT_STEP" });
//         }
//         else {
//             setErrors(validationError)
//         }
//         console.log('submitting form data:', formData);
//         return errors;

//     }

//     const renderStep = () => {
//         switch (currentStep) {
//             case 1:
//                 return <StepOne formData={formData} onNext={handleNext} />
//             case 2:
//                 return <StepTwo formData={formData} onNext={handleNext} onPrev={handlePrev} />
//             case 3:
//                 return <StepThree formData={formData} onPrev={handlePrev} onSubmit={handleSubmit} />
//             // case 4:
//             //     return <StepFour formData={formData} onPrev={handleReset} />
//             default: return null;
//         }
//     }

//     return (
//         <>
//             <div className={`wizard-form-conatiner step-container step-${currentStep}`}>
//                 <div className="wizard-form">
//                     <h3>Step - {currentStep}</h3>
//                     <div className="step-content">
//                         {renderStep()}
//                     </div>
//                     {/* <StepFour /> */}

//                     {/* {`${currentStep === 4}` && <StepFour />} */}

//                 </div>
//             </div>
//         </>
//     )

// }