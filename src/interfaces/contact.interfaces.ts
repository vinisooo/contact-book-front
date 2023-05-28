import { z } from "zod";
import { contactSerializer } from "../serializers/contact.serializer";

type iContact = z.infer<typeof contactSerializer>;

export type { iContact }
