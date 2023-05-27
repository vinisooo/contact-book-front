import z from "zod";
import { phoneRegex } from "./contact.serializer";
import { noUserContactSerializer } from "./contact.serializer";

const userSerializer = z.object({
  id: z.number(),
  name: z.string().max(126, "O seu nome deve conter no máximo 256 caracteres")
    .min(3, "O nome de usuário deve conter no minimo 3 caracteres"),
  email: z.string().email().max(126),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(126)
   .regex(/^(?=.*[a-z])(?=.*[A-Z])/g, "A senha deve conter pelo menos uma letra maiúscula e uma letra minúscula"),
  phone: z.string().max(20).regex(phoneRegex, "Invalid phone number. Example: +00 00 000000000"),
  createdAt: z.string(),
  contacts: z.array(noUserContactSerializer)
});

const userReqSerializer = userSerializer.omit({ id: true, createdAt: true, contacts: true })
    .extend({confirmPassword: z.string().max(256)}).refine((data) => data.password === data.confirmPassword, {
        message: "As senhas devem coincidir",
        path: ["confirmPassword"],
    });


const userLoginSerializer = userSerializer.omit({ id: true, createdAt: true, contacts: true, name: true, phone: true, });

const userUpdateSerializer = userSerializer.omit({id: true, createdAt: true, contacts: true}).partial();

const noPasswordUserSerializer = userSerializer.omit({ password: true });

const noPasswordNoContactsUserSerializer = noPasswordUserSerializer
  .omit({ contacts: true });

export {
  userSerializer,
  userReqSerializer,
  noPasswordUserSerializer,
  noPasswordNoContactsUserSerializer,
  userUpdateSerializer,
  userLoginSerializer
};
