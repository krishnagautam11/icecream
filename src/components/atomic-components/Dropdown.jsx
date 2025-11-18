import { useState, useRef, useEffect } from "react";

export const Dropdown = ({ label, value, selectValue, optionValue, error }) => {
  const [open, setOpen] = useState(false);
  const dropDownId = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownId.current && !dropDownId.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    selectValue({ target: { value: option.value } });
    setOpen(false);
  };

  return (
    <div className="custom-dropdown" ref={dropDownId}>
      <label>{label}</label>

      <div className="dropdown-selected" onClick={() => setOpen(!open)}>
        {value || "Select an option"}

        {open && (
          <ul className="dropdown-menu">
            {optionValue.map((option) => (
              <li key={option.value} onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};
