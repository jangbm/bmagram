import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 350px;
`;

const StateChange = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      margin-top: 7px;
    }
  }
`;

export default ({
  action,
  setAction,
  username,
  password,
  firstName,
  lastName,
  email,
  onSubmit,
  secret,
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type="email" />
            <Button text={"로그인"}></Button>
            {/* <Input placeholder={"Username"} {...username} /> */}
            {/* <Input placeholder={"Password"} {...password} type="password" /> */}
          </form>
        )}
        {action === "signUp" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"First Name"} {...firstName} />
            <Input placeholder={"Last Name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Username"} {...username} />
            {/* <Input placeholder={"Password"} {...password} type="password" /> */}
            <Button text={"회원가입"}></Button>
          </form>
        )}
        {action === "confirm" && (
          <form onSubmit={onSubmit}>
            <Input placeholder={"인증 문자를 넣으세요."} {...lastName} />
            <Button text={"인증하기"}></Button>
          </form>
        )}
      </Form>
      <StateChange>
        {action === "logIn" ? (
          <>
            계정이 없으신가요?{" "}
            <Link onClick={() => setAction("signUp")}>가입하기</Link>
          </>
        ) : (
          <>
            계정이 있으신가요?{" "}
            <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChange>
    </Wrapper>
  );
};
