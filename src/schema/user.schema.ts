import { object, string, TypeOf } from "zod";

export const createUserSchema=object({
  body: object ({
    name: string({
      required_error: "Name is required."
    }),
    password: string({
      required_error: "Password is required."
    }).min(8, "Password must be atleast 8 characters."),
    confirmPassword: string({
      required_error: "Please confirm your password."
    }),
    email: string({
      required_error: "Please enter your e-mail address."
    }).email("Invalid e-mail address.")
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match the confirmation.",
    path: ["confirmPassword"]
  })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;