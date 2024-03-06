import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(4)
    .max(10)
    // .password("Invalid password")
    .required("Required"),
});
