export type CheckboxProps = {
  inputName: string;
  displayName: string;
  options: { value: string; display: string }[];
  min?: number;
  max?: number;
  required?: boolean;
  value?: string[];
  onChange: (selected: string[]) => void;
  error?: string;
};


export type DropdownProps = {
  inputName: string;
  displayName: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};


export type TextInputProps = {
  inputName: string;
  displayName: string;
  type: string;
  isTextarea?: boolean;
  rows?: number;
  cols?: number;
  classNames?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
export type RadioInputProps = {
  inputName: string;
  displayName: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};