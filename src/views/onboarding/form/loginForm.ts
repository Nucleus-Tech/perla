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
    .email("Neispravna email adresa")
    .required("Obavezno polje"),
  [LoginFormFields.password]: Yup.string()
    .max(20, "Obavezno 20 karaktera ili manje")
    .min(3, "Obavezno 3 karaktera ili više")
    .required("Obavezno polje"),
});
