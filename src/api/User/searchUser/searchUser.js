import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) =>
      prisma.users({
        where: {
          OR: [
            { username_contains: args.term }, //또는
            { firstName_contains: args.term }, //또는
            { lastName_contains: args.term }
          ]
        }
      })
  }
};
