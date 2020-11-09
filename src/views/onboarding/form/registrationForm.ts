import * as Yup from "yup";
import { ObjectSchema } from "yup";

export enum RegistartionFromFields {
  email = "email",
  firstName = "firstName",
  lastName = "lastName",
  password = "password",
}

export const defaultRegistartionValue: Record<
  RegistartionFromFields,
  string
> = {
  [RegistartionFromFields.email]: "",
  [RegistartionFromFields.firstName]: "",
  [RegistartionFromFields.lastName]: "",
  [RegistartionFromFields.password]: "",
};
export const registrationValidators: ObjectSchema<Record<
  RegistartionFromFields,
  string
>> = Yup.object({
  [RegistartionFromFields.email]: Yup.string()
    .email("Neispravna email adresa")
    .required("Obavezno polje"),
  [RegistartionFromFields.password]: Yup.string()
    .max(20, "Obavezno 20 karaktera ili manje")
    .min(3, "Obavezno 3 karaktera ili više")
    .required("Obavezno polje"),
  [RegistartionFromFields.firstName]: Yup.string().required("Required"),
  [RegistartionFromFields.lastName]: Yup.string().required("Required"),
});
