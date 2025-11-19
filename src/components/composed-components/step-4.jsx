export const StepThree = ({ formData, dispatch }) => {
    const handleReset = () => {
        dispatch({ type: "RESET_FORM" });
        window.location.reload(); // ensures UI resets too
    };

    return (
        <div className="summary-container">
            <h2 className="thank-you-title">🎉 Thank You Ice Cream Lover! 🎉</h2>
            <p className="thank-you-subtitle">Here’s what you created:</p>

            <div className="order-summary-box">
                <h3>Your Order Summary</h3>
                <ul>
                    <li><strong>Base:</strong> {formData.base}</li>
                    <li><strong>Mixins:</strong> {formData.mixins}</li>
                    <li><strong>Toppings:</strong> {formData.toppings}</li>
                </ul>
            </div>

            <p className="enjoy-text">Enjoy your custom treat! 🍨💖</p>

            <button className="reset-btn" onClick={handleReset}>Order Again</button>
        </div>
    );
};
