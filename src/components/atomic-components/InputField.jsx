export const InputField = ({ value, placeholder, onChange }) => {
    return (
        <div className="input-fields">
            <label htmlFor="">Select Base For Your Ice Cream</label>
            <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}