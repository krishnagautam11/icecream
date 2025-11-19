import { useState } from "react";
import { Dropdown } from "../atomic-components/Dropdown";

export const StepTwo = ({ onNext, onPrev, errors }) => {
    const [mixins, setMixins] = useState("");
    const [toppings, setToppings] = useState("");

    const Mixins = [
        { value: "fruits", label: "fruits" },
        { value: "nuts", label: "nuts" },
        { value: "Brownies", label: "Brownies" },
        { value: "Chocolate Chips", label: "Chocolate Chips" },
        { value: "Caramel", label: "Caramel" },
        { value: "Candy Bars", label: "Candy Bars" }
    ];

    const Toppings = [
        { value: "whipped cream", label: "whipped cream" },
        { value: "maraschino cherries", label: "maraschino cherries" },
        { value: "Cherries", label: "Cherries" },
        { value: "Fudge", label: "Fudge" },
        { value: "Gummy Candies", label: "Gummy Candies" },
        { value: "Cereal", label: "Cereal" },
        { value: "Boba Pearls", label: "Boba Pearls" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ mixins, toppings });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Dropdown
                label="Select Mixins For Your IceCream"
                value={mixins}
                selectValue={(e) => setMixins(e.target.value)}
                optionValue={Mixins}
                error={errors?.mixins}
            />

            <Dropdown
                label="Select Toppings For Your IceCream"
                value={toppings}
                selectValue={(e) => setToppings(e.target.value)}
                optionValue={Toppings}
                error={errors?.toppings}
            />

            <div className="btns">
                <button onClick={onPrev}>Prev</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
};


// import { useState } from "react";
// import { InputField } from "../atomic-components/InputField";
// import { Dropdown } from "../atomic-components/Dropdown";

// export const StepTwo = ({ formData, onNext, onPrev }) => {
//     const [mixins, setMixins] = useState('');
//     const [toppings, setToppings] = useState('');

//     const Mixins = [
//         { value: "fruits", label: "fruits" },
//         { value: "nuts", label: "nuts" },
//         { value: "Brownies", label: "Brownies" },
//         { value: "Chocolate Chips", label: "Chocolate Chips" },
//         { value: "Caramel", label: "Caramel" },
//         { value: "Candy Bars", label: "Candy Bars" },

//     ];
//     const Toppings = [
//         { value: "whipped cream", label: "whipped cream" },
//         { value: "numaraschino cherriests", label: "maraschino cherries" },
//         { value: "Cherries", label: "Cherries" },
//         { value: "Fudge", label: "Fudge" },
//         { value: "Gummy Candies", label: "Gummy Candies" },
//         { value: "Cereal", label: "Cereal" },
//         { value: "Boba Pearls", label: "Boba Pearls" },
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNext({ mixins, toppings })
//         console.log(mixins);
//         console.log(toppings);
//     }

//     const handlePrev = (e) => {
//         e.preventDefault();
//         onPrev({})
//     }

//     return (
//         <>
//             <form action="" onSubmit={handleSubmit}>

//                 <Dropdown label='Select Mixins For Your IceCream'
//                     value={mixins}
//                     selectValue={(e) => setMixins(e.target.value)}
//                     optionValue={Mixins}
//                 />

//                 <Dropdown label='Select Toppings For Your IceCream'
//                     value={toppings}
//                     selectValue={(e) => setToppings(e.target.value)}
//                     optionValue={Toppings}
//                 />
//                 <div className="btns">
//                     <button onClick={handlePrev}>Prev</button>
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }