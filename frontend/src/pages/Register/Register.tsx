import { Link, useNavigate } from "react-router";
import { useState } from "react";
import styles from "./register.module.scss";
import { auth } from "@/shared/api/auth";
import logoIcon from "@/shared/ui/Logo/logo.svg";
import { ErrorLabel } from "@/shared/ui/ErrorLabel/ErrorLabel";
import { getErrorMessage } from "@/shared/lib/getErrorMessage";

export function Register() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const passwordMismatch =
    password !== checkPassword && checkPassword.length > 0;

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      await auth.register(email, password);
      navigate("/login");
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  return (
    <main className={`${styles.page} flex items-center justify-center`}>
      <div
        className={`${styles.card} w-full flex flex-col items-center gap-7`}
        style={{ maxWidth: "420px", padding: "40px" }}
      >
        {/* Logo icon */}
        <img
          src={logoIcon}
          alt="Velnote"
          width={48}
          height={48}
          className={styles.logoIcon}
        />

        {/* Header */}
        <div className="flex flex-col items-center gap-2 w-full text-center">
          <h1 className={styles.title}>Velnote</h1>
          <p className={styles.subtitle}>Create your account</p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 w-full" action={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`${styles.input} w-full px-3 py-2.5`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Create a password..."
              className={`${styles.input} w-full px-3 py-2.5`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Repeat your password..."
              className={`${styles.input} w-full px-3 py-2.5`}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>

          {passwordMismatch && (
            <span className={`${styles.passwordError} text-sm`}>
              The passwords don't match.
            </span>
          )}

          <ErrorLabel error={error} />

          <button
            type="submit"
            disabled={passwordMismatch}
            className={`${styles.button} w-full py-2.5 mt-1 cursor-pointer`}
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" className={styles.footerLink}>
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
