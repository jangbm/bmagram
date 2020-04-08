import React, { useState } from "react";
import userInput from "../../Hooks/userInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = userInput("");
  const password = userInput("");
  const firstName = userInput("");
  const lastName = userInput("");
  const secret = userInput("");
  const email = userInput("");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  // console.log(userName, password, firstName, lastName, email);

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("이메일이 없습니다. 가입해주세요.");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("메일로 인증 문자를 보냈습니다.");
            setAction("confirm");
          }
        } catch {
          toast.error("로그인할 수 없습니다. 다시 시도해주세요.😥");
        }
      } else {
        toast.error("이메일을 입력해주세요.");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("아이디를 만들 수 없습니다. 다시 시도해주세요.😥");
          } else {
            toast.success("환영합니다. 로그인해주세요.");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("모든항목을 입력해주세요.");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation();
          // console.log(confirmSecret);
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("인증문자를 확인할 수 없습니다. 다시 시도해주세요😑");
        }
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      username={username}
      password={password}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
      secret={secret}
    ></AuthPresenter>
  );
};
