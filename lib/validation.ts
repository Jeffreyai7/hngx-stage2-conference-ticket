import {z}  from "zod"


export const schema = z.object({
  step1: z.object({
    ticketType: z.string().nonempty("Ticket type is required"),
    ticket: z.string().nonempty("Number of tickets is required"),
  }),
  step2: z.object({
    name: z.string().min(3, "name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().optional(),
  }),
});

 export type FormData = z.infer<typeof schema>;
