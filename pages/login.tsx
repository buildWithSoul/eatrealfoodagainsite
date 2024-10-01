import { useRouter } from "next/router";
import { useState } from "react";

import { supabase } from "@/utils/supabase/component";
import { useOAuth } from "@/utils/supabase/oAuth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
    router.push("/");
  }

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
    }
    router.push("/");
  }

  const { signInWithGoogle, signInWithApple } = useOAuth(["google", "apple"]);

  return (
    <main>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={logIn}>
          Log in
        </button>
        <button type="button" onClick={signUp}>
          Sign up
        </button>
        <button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <button type="button" onClick={signInWithApple}>
          Sign in with Apple
        </button>
      </form>
    </main>
  );
}
