import { object, string, TypeOf } from "zod";

export const createUserSchema = {
    body: object({
        name: string({
            required_error: 'Name is required',
        }),
        lastname: string({
            required_error: 'Lastname is required',
        }),
        email: string({
            required_error: 'Email is required',
        }),
    }),
};

export type CreateUserInput = TypeOf<typeof createUserSchema.body>