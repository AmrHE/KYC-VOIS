import type { RadioInputProps } from "../types";

const RadioInput = ({
  inputName,
  displayName,
  options,
  required = false,
  value = "",
  onChange,
  error,
}: RadioInputProps) => {
  return (
    <div className="mb-4 flex flex-col items-start w-full text-black dark:text-white">
      <span className="block font-medium mb-1">{displayName}</span>

      {options.map((option: string, index : number) => (
        <label
          key={index}
          className="inline-flex items-center gap-2 mb-1 cursor-pointer"
        >
          <input
            type="radio"
            name={inputName}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            required={required && index === 0}
            className="accent-blue-600"
          />
          {option}
        </label>
      ))}

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default RadioInput;
