import Button from "./Button";
import "./header.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogOut: () => void;
  onCreateAccount: () => void;
}

function Header({ user, onLogin, onLogOut, onCreateAccount }: HeaderProps) {
  return (
    <header className="storybook-header">
      <div>로고</div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>
            </span>
            <Button size="sm" onClick={onLogOut} label="로그아웃"></Button>
          </>
        ) : (
          <>
            <Button size="sm" onClick={onLogin} label="로그인"></Button>
            <Button
              size="sm"
              onClick={onCreateAccount}
              label="회원가입"
            ></Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
