import { z } from "zod";
import { contactReqSerializer, contactSerializer, contactUpdateSerializer } from "../serializers/contact.serializer";

type iContact = z.infer<typeof contactSerializer>;
type iContactReq = z.infer<typeof contactReqSerializer>;
type iContactUpdate = z.infer<typeof contactUpdateSerializer>;

export type { iContact, iContactReq, iContactUpdate }
