import type { CheckboxProps } from "../types";

const Checkbox = ({
  inputName,
  displayName,
  options,
  min = 0,
  max = options.length,
  required = false,
  value = [],
  onChange,
  error,
}: CheckboxProps) => {
  const selected: string[] = value ?? [];

  const handleChange = (optionValue: string) => {
    const alreadySelected = selected.includes(optionValue);
    const updated = alreadySelected
      ? selected.filter((item) => item !== optionValue)
      : [...selected, optionValue];

    if (!alreadySelected && updated.length > max) return;
    if (alreadySelected && updated.length < min) return;

    onChange(updated);
  };

  return (
    <div className="mb-4 flex flex-col items-start w-full text-black dark:text-white">
      <span className="block font-medium mb-1">{displayName}</span>
      <div className="flex items-center gap-5 flex-wrap">
        {options.map((option, index) => (
          <label
            key={index}
            className="inline-flex items-center gap-2 mb-1 cursor-pointer"
          >
            <input
              type="checkbox"
              name={inputName}
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="accent-blue-600"
            />
            {option.display}
          </label>
        ))}
      </div>

      {required && selected.length < min && (
        <p className="text-sm text-red-600 mt-1">
          Please select at least {min}.
        </p>
      )}

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default Checkbox;
