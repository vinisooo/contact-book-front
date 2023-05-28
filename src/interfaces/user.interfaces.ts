import { userReqSerializer, userLoginSerializer, userSerializer } from "../serializers/user.serializer";
import { z } from "zod";

type iUser = z.infer<typeof userSerializer>;
type iUserReq = z.infer<typeof userReqSerializer>;
type iUserLogin = z.infer<typeof userLoginSerializer>;

export type {iUserReq, iUserLogin, userSerializer, iUser}