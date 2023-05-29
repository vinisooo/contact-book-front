import { userReqSerializer, userLoginSerializer, userSerializer, userUpdateSerializer } from "../serializers/user.serializer";
import { z } from "zod";

type iUser = z.infer<typeof userSerializer>;
type iUserReq = z.infer<typeof userReqSerializer>;
type iUserLogin = z.infer<typeof userLoginSerializer>;
type iUserUpdate = z.infer<typeof userUpdateSerializer>;

export type {iUserReq, iUserLogin, userSerializer, iUser, iUserUpdate}