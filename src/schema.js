import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql")); // 해당 경로에는 관련된 graphql 및 js가 포함되면 오류가 생김
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schemas = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schemas;
