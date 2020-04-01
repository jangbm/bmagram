import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          OR: [
            { location_starts_with: args.term },
            { caption_starts_with: args.term }
          ]
          //    OR:[
          //     {location_contains:args.term}, 모든 단어 확인 (1자까지)
          //     {caption_contains:args.term}  모든 단어 확인 (1자까지)
          // ]
        }
      })
  }
};
