import type { DropdownProps } from "../types";

const Dropdown = ({
  inputName,
  displayName,
  options,
  required = false,
  value = "",
  onChange,
  error,
}: DropdownProps) => {
  return (
    <div className="mb-4 flex flex-col items-start w-full text-black dark:text-white">
      <label htmlFor={inputName} className="block mb-1 font-medium">
        {displayName}
      </label>

      <select
        id={inputName}
        name={inputName}
        required={required}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded px-3 py-2 bg-white dark:bg-black ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;
