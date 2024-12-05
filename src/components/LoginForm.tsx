import { useState } from "react";
import Button from "./Button";
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
      {/* <Input /> */}
      {/* <div className="input-container">
        <label>이메일</label>
        <input className="input" value={email} onChange={handleEmail} />
        {emailErrorMessage.length > 0 && (
          <p className="input-error">{emailErrorMessage}</p>
        )}
      </div> */}
      {/* <div className="input-container">
        <label>패스워드</label>
        <input className="input" value={password} onChange={handlePassword} />
        {passwordErrorMessage.length > 0 && (
          <p className="input-error">{passwordErrorMessage}</p>
        )}
      </div> */}

      <Button size="sm" label="로그인하기" onClick={handleSubmit} />
    </form>
  );
}

export default LoginForm;
