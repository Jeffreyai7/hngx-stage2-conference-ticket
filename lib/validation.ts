import {z}  from "zod"


export const schema = z.object({
  step1: z.object({
    ticket: z.string().min(1, "ticket is required"),
    ticketType:z.string()
  }),
  step2: z.object({
    name: z.string().min(3, "name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().optional(),
  }),
});

 export type FormData = z.infer<typeof schema>;
