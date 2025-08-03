import { Controller } from "react-hook-form";
import type { Control, FieldErrors } from "react-hook-form";
import { formSchema } from "./formSchema";
import TextInput from "../TextInput";
import RadioGroup from "../RadioInput";
import Dropdown from "../Dropdown";
import Checkbox from "../CheckboxInput";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormRenderer = ({ control, errors }: {control: Control<any>, errors: FieldErrors}) => {
  return (
    <>
      {formSchema.map((field) => {
        switch (field.type) {
          case "text":
          case "textarea":
            return (
              <Controller
                key={field.id}
                name={field.id}
                control={control}
                render={({ field: controllerField }) => (
                  <TextInput
                    inputName={field.id}
                    displayName={field.label}
                    type="text"
                    isTextarea={field.type === "textarea"}
                    rows={4}
                    cols={20}
                    error={errors[field.id]?.message as string}
                    {...controllerField}
                  />
                )}
              />
            );

          case "radio_buttons":
            return (
              <Controller
                key={field.id}
                name={field.id}
                control={control}
                render={({ field: controllerField }) => (
                  <RadioGroup
                    inputName={field.id}
                    displayName={field.label}
                    options={field.options!}
                    required={field.required || false}
                    value={controllerField.value ?? ""}
                    onChange={controllerField.onChange}
                    error={errors[field.id]?.message as string}
                  />
                )}
              />
            );

          case "multi_choice":
            return (
              <Controller
                key={field.id}
                name={field.id}
                control={control}
                render={({ field: controllerField }) => (
                  <Checkbox
                    inputName={field.id}
                    displayName={field.label}
                    options={field.options!.map((o: string) => ({
                      value: o,
                      display: o,
                    }))}
                    min={field.min}
                    max={field.max}
                    required={field.required || false}
                    value={controllerField.value || []}
                    onChange={controllerField.onChange}
                    error={errors[field.id]?.message as string}
                  />
                )}
              />
            );

          case "drop_down":
            return (
              <Controller
                key={field.id}
                name={field.id}
                control={control}
                render={({ field: controllerField }) => (
                  <Dropdown
                    inputName={field.id}
                    displayName={field.label}
                    options={field.options!}
                    required={field.required || false}
                    value={controllerField.value ?? ""}
                    onChange={controllerField.onChange}
                    error={errors[field.id]?.message as string}
                  />
                )}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default FormRenderer;
