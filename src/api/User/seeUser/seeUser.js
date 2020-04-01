import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      //공용 프로파일이므로 인증이 되지 않아도됨
      //   isAuthenticated(request);
      const { id } = args;
      const user = await prisma.user({ id });
      const posts = await prisma.user({ id }).posts();
      return {
        user,
        posts
      };
    }
  }
};
