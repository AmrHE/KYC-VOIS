import * as Yup from 'yup';
import { formSchema } from './formSchema';

export const buildValidationSchema = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shape: Record<string, any> = {};

  formSchema.forEach((field) => {
    if (field.type === 'multi_choice') {
      shape[field.id] = Yup.array()
        .min(field.min || 0, `Select at least ${field.min} options`)
        .max(field.max || field.options!.length, `Select no more than ${field.max} options`)
        .required(`${field.label} is required`);
    } else {
      let validator = Yup.string();
      if (field.required) {
        validator = validator.required(`${field.label} is required`);
      }
      shape[field.id] = validator;
    }
  });

  return Yup.object().shape(shape);
};