import { useState } from "react";
import Header from "./Header";

type User = {
  name: string;
};

function LoginPage() {
  const [user, setUser] = useState<User>();
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "여나쪼" })}
        onLogOut={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "여나쪼" })}
      />
    </article>
  );
}

export default LoginPage;
