import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { buildValidationSchema } from "../FormRenderer/schemaValidation";
import FormRenderer from "../FormRenderer";


const Form = () => {
  const validationSchema = buildValidationSchema();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  type FormValues = Yup.InferType<typeof validationSchema>;

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    alert("your form has been received successfully")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 lg:w-1/3 mx-auto dark:bg-black">
      <FormRenderer control={control} errors={errors} />
      <button
        type="submit"
        className="px-4 py-2 w-full bg-blue-600 dark:bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

