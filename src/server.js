import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import passport from "passport";
import "./passport";

//mail테스트
// import { sendSecretMail } from "./utils";
// sendSecretMail("jang2620@naver.com", "1234");

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server runing on port http://localhost:${PORT}`)
);
