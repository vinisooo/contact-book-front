import { userReqSerializer } from "../serializers/user.serializer";
import { z } from "zod";

export type iUserReq = z.infer<typeof userReqSerializer>;
