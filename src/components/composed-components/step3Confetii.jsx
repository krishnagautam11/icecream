import confetti from "canvas-confetti";
import { useEffect } from "react";
import iceCream1 from "../../assets/images/icecream1.png"; 
import iceCream2 from "../../assets/images/icecream2.png"; 
import iceCream3 from "../../assets/images/icecream3.png"; 

export const StepThree = ({ formData, dispatch }) => {

    // Run confetti ONCE when user reaches this step
    useEffect(() => {
        const duration = 2 * 1000; // 2 seconds
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 6,
                angle: 60,
                spread: 70,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 6,
                angle: 120,
                spread: 70,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    const handleReset = () => {
        dispatch({ type: "RESET_FORM" });
        window.location.reload();
    };

    return (
        <div className="summary-container">

            {/* Floating Ice Cream Illustrations */}
            <img src={iceCream1} className="floating-icecream ice1" alt="" />
            <img src={iceCream2} className="floating-icecream ice2" alt="" />
            <img src={iceCream3} className="floating-icecream ice3" alt="" />

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
