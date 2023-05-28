import { z } from "zod";
import { contactReqSerializer, contactSerializer } from "../serializers/contact.serializer";

type iContact = z.infer<typeof contactSerializer>;
type iContactReq = z.infer<typeof contactReqSerializer>

export type { iContact, iContactReq }
