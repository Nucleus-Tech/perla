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
    .email("Invalid email address")
    .required("Required"),
  [RegistartionFromFields.password]: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(3, "Must be 3 characters or more")
    .required("Required"),
  [RegistartionFromFields.firstName]: Yup.string().required("Required"),
  [RegistartionFromFields.lastName]: Yup.string().required("Required"),
});
