import { useState } from "react";
import { Dropdown } from "../atomic-components/Dropdown";

export const StepOne = ({ onNext, errors }) => {
    const [base, setBase] = useState("");

    const Base = [
        { value: "Philadelphia-Style", label: "Philadelphia-Style" },
        { value: "Custard Base", label: "Custard Base" },
        { value: "Fruit base", label: "Fruit base" },
        { value: "Stabilizer-based", label: "Stabilizer-based" },
        { value: "Commercially-prepped bases", label: "Commercially-prepped bases" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ base });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Dropdown
                label="Select Base For Your IceCream"
                value={base}
                selectValue={(e) => setBase(e.target.value)}
                optionValue={Base}
                error={errors?.base}
            />

            <div className="btn">
                <button type="submit">Next</button>
            </div>
        </form>
    );
};



// import { useState } from "react";
// import { InputField } from "../atomic-components/InputField";
// import { Dropdown } from "../atomic-components/Dropdown";

// export const StepOne = ({ formData, onNext, value }) => {
//     const [base, setBase] = useState('');


//     const Base = [
//         { value: "Philadelphia-Style", label: "Philadelphia-Style" },
//         { value: "Custard Base", label: "Custard Base" },
//         { value: "Fruit base", label: "Fruit base" },
//         { value: "Stabilizer-based ", label: "Stabilizer-based" },
//         { value: "Commercially-prepped bases", label: "Commercially-prepped bases" },


//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onNext({ base })
//         console.log(base);

//     }


//     return (
//         <>
//             <form  onSubmit={handleSubmit}>

//                 <Dropdown label='Select Base For Your IceCream'
//                     value={base}
//                     selectValue={(e) => setBase(e.target.value)}
//                     optionValue={Base}
//                 />

//                <div className="btn"><button type='submit'>Next</button></div>
//             </form>
//         </>
//     )
// }