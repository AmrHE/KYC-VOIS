import type { TextInputProps } from "../types";

const TextInput = ({
  inputName,
  displayName,
  type,
  isTextarea = false,
  rows = 4,
  cols = 10,
  value,
  onChange,
  classNames = "",
  error,
}: TextInputProps) => {
  const baseStyles = `w-full border rounded px-3 py-2 ${error ? "border-red-500" : "border-gray-300 "} ${classNames}`;

  return (
    <div className="mb-4 flex flex-col items-start w-full text-black dark:text-white">
      <label htmlFor={inputName} className="block mb-1 font-medium">
        {displayName}
      </label>

      {isTextarea ? (
        <textarea
          id={inputName}
          name={inputName}
          rows={rows}
          cols={cols}
          value={value ?? ""}
          onChange={onChange}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={inputName}
          name={inputName}
          value={value ?? ""}
          onChange={onChange}
          className={baseStyles}
        />
      )}

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
