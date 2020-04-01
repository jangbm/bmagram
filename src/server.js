import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import passport from "passport";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

//mail테스트
// import { sendSecretMail } from "./utils";
// sendSecretMail("jang2620@naver.com", "1234");

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
}); //context-resolver사이에서 정보전달에 사용

server.express.use(logger("dev"));
server.express.use(authenticateJwt); // resolver에 전달해줘야함

server.start({ port: PORT }, () =>
  console.log(`Server runing on port http://localhost:${PORT}`)
);
