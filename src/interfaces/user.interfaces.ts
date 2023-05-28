import { userReqSerializer, userLoginSerializer } from "../serializers/user.serializer";
import { z } from "zod";

type iUserReq = z.infer<typeof userReqSerializer>;
type iUserLogin = z.infer<typeof userLoginSerializer>;

export type {iUserReq, iUserLogin}