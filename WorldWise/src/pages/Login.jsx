import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useAuth } from "../Contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function Login() {
  const { isAuthenticated, login, Error, ErrorMessage } = useAuth();
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          {Error === true ? (
            <span style={{ color: "red", fontSize:"1.6rem" }}>{ErrorMessage}</span>
          ) : (
            ""
          )}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" className={styles.ctaLink}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
