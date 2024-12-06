import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./loginform.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // 둘중에 하나라도 빈칸이 있을때
    if (email.length === 0) {
      setEmailErrorMessage("이메일을 입력해주세요");
      return;
    }
    if (password.length === 0) {
      setPasswordErrorMessage("패스워드를 입력해주세요");
      return;
    }
  };
  return (
    <form className="login-form">
      <Input
        id="email"
        label="email"
        value={email}
        placeholder="email"
        onChange={handleEmail}
        errorMessage={emailErrorMessage}
      />
      <Input
        id="password"
        label="password"
        value={password}
        placeholder="password"
        onChange={handlePassword}
        errorMessage={passwordErrorMessage}
      />
      <Button size="sm" label="로그인하기" onClick={handleSubmit} />
    </form>
  );
}

export default LoginForm;
