import { Link } from "react-router";
import styles from "./register.module.scss";
import { useState } from "react";

export function Register() {
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  return (
    <main className={`min-h-screen flex items-center justify-center ${styles.page}`}>
      <div className={styles.card}>
        <h1 className="text-2xl font-bold mb-6">Register</h1>
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className={styles.input}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>
          
          {password !== checkPassword && <span className={styles.passwordSpan}>The passwords don't match.</span>}

          <div className={styles.footer}>
            <button type="submit" className={`${styles.button} ${password !== checkPassword && styles.disable}`}>
              Register
            </button>
            <p className="text-sm text-center">
              Already have an account? <Link to={"/login"}>Login.</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
