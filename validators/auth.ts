import {z} from 'zod';

export const joinValidator = z.object({
    email: z.string().email(),
    name: z.string().min(3).max(100),
    details: z.string().min(3).max(255),
});