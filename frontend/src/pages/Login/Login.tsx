import { Link } from "react-router";
import styles from "./login.module.scss";

export function Login() {
  return (
    <main className={`min-h-screen flex items-center justify-center ${styles.page}`}>
      <div className={styles.card}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={styles.input}
            />
          </div>

          <div className={styles.footer}>
            <button type="submit" className={styles.button}>
              Login
            </button>
            <p className="text-sm text-center">
              No account? <Link to={"/register"}>Register.</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
