export const StepThree = ({ formData, dispatch }) => {

    const handleReset = () => {
        dispatch({ type: "RESET_FORM" });
        // No need to reload the page!!
    };

    return (
        <div className="summary-container">
            <h2 className="thank-you-title">🎉 Thank You Ice Cream Lover! 🎉</h2>
            <p className="thank-you-subtitle">Here’s the delicious ice cream you crafted:</p>

            <div className="order-summary-box">
                <h3>Your Order Summary</h3>
                <ul>
                    <li><strong>Base:</strong> {formData.base}</li>
                    <li><strong>Mixins:</strong> {formData.mixins}</li>
                    <li><strong>Toppings:</strong> {formData.toppings}</li>
                </ul>
            </div>

            <p className="enjoy-text">Enjoy your custom-made treat! 🍨💖</p>

            <button className="reset-btn" onClick={handleReset}>
                Order Again
            </button>
        </div>
    );
};



// export const StepThree = ({ formData, dispatch }) => {

//     const handleReset = () => {
//         // Clear saved form data
//         dispatch({ type: "RESET_FORM" });

//         // Reset UI
//         window.location.reload();
//     };

//     return (
//         <div className="summary-container">
//             <h2 className="thank-you-title">🎉 Thank You Ice Cream Lover! 🎉</h2>
//             <p className="thank-you-subtitle">Here’s the delicious ice cream you crafted:</p>

//             <div className="order-summary-box">
//                 <h3>Your Order Summary</h3>
//                 <ul>
//                     <li><strong>Base:</strong> {formData.base}</li>
//                     <li><strong>Mixins:</strong> {formData.mixins}</li>
//                     <li><strong>Toppings:</strong> {formData.toppings}</li>
//                 </ul>
//             </div>

//             <p className="enjoy-text">Enjoy your custom-made treat! 🍨💖</p>

//             {/* Reset Button */}
//             <button className="reset-btn" onClick={handleReset}>
//                 Order Again
//             </button>
//         </div>
//     );
// };




// export const StepThree = ({ formData }) => {
//     return (
//         <div className="summary-container">

//             <h2 className="thank-you-title">🎉 Thank You Ice Cream Lover! 🎉</h2>
//             <p className="thank-you-subtitle">Here’s the delicious ice cream you crafted:</p>

//             <div className="order-summary-box">
//                 <h3>Your Order Summary</h3>
//                 <ul>
//                     <li>
//                         <strong>Base:</strong> {formData.base}
//                     </li>

//                     <li>
//                         <strong>Mixins:</strong> {formData.mixins}
//                     </li>

//                     <li>
//                         <strong>Toppings:</strong> {formData.toppings}
//                     </li>
//                 </ul>
//             </div>

//             <p className="enjoy-text">Enjoy your custom-made treat! 🍨💖</p>
//         </div>
//     );
// };







// import { useState } from "react";
// import { InputField } from "../atomic-components/InputField";
// import { Dropdown } from "../atomic-components/Dropdown";

// export const StepThree = ({ formData }) => {
  

//     return (
//         <>
//             <div>
//                 <p>Thank You Ice Cream Lovers!!!</p>
//             </div>
//         </>
//     )
// }