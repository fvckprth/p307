import {z} from 'zod';

export const joinValidator = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    name: z.string().min(3, { message: "Please provide a proper name" }).max(100),
    details: z.string().min(3, { message: "Please provide some info" }).max(255),
  });
  