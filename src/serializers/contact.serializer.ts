import { z } from "zod";

const phoneRegex = /^\+\d{2}\s\d{2}\s\d{9}$/;

const contactSerializer: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(123),
    email: z.string().email().max(123),
    phone: z.string().max(20).regex(phoneRegex, "Invalid phone number, must be like: +00 00 000000000"),
    createdAt: z.string(),
})

const noUserContactSerializer = contactSerializer.omit({user: true});

const contactReqSerializer = noUserContactSerializer.omit({id: true, createdAt: true});

const contactUpdateSerializer = contactReqSerializer.partial();

export { phoneRegex, contactSerializer, noUserContactSerializer, contactReqSerializer, contactUpdateSerializer };