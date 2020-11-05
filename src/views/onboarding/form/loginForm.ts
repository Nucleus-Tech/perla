import * as Yup from "yup";
import { ObjectSchema } from "yup";

export enum LoginFormFields {
  email = "email",
  password = "password",
}

export const defaultLoginValues: Record<LoginFormFields, string> = {
  [LoginFormFields.email]: "",
  [LoginFormFields.password]: "",
};

export const loginValidators: ObjectSchema<Record<
  LoginFormFields,
  string
>> = Yup.object({
  [LoginFormFields.email]: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  [LoginFormFields.password]: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(3, "Must be 3 characters or more")
    .required("Required"),
});
