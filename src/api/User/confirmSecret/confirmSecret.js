import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
  Mutation: {
    confirmSecret: async (_, args) => {
      const { email, secret } = args;
      const user = await prisma.user({ email });

      // prisma 내 저장된 secret 과 일치 하면, token을 리턴
      if (user.loginSecret === secret) {
        //jwt
        return generateToken(user.id);
      } else {
        throw Error("Wrong email/secret conbination");
      }
    }
  }
};
