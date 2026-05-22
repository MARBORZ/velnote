import { Link } from "react-router";
import { useState } from "react";
import styles from "./register.module.scss";

export function Register() {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const passwordMismatch = password !== checkPassword && checkPassword.length > 0;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className={`${styles.card} w-full max-w-md p-8`}>
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" name="email" className={`${styles.input} w-full px-3 py-2`} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={`${styles.input} w-full px-3 py-2`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className={`${styles.input} w-full px-3 py-2`}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>

          {passwordMismatch && (
            <span className={`${styles.passwordError} text-sm`}>The passwords don't match.</span>
          )}

          <div className="flex flex-col gap-3 mt-2">
            <button
              type="submit"
              disabled={passwordMismatch}
              className={`${styles.button} w-full py-2 cursor-pointer`}
            >
              Register
            </button>
            <p className="text-sm text-center">
              Already have an account? <Link to="/login">Login.</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
