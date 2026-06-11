import { Link, useNavigate } from "react-router";
import styles from "./login.module.scss";
import { auth } from "@/shared/api/auth";
import logoIcon from "@/shared/ui/Logo/logo.svg";
import { useState } from "react";
import { ErrorLabel } from "@/shared/ui/ErrorLabel/ErrorLabel";
import { getErrorMessage } from "@/shared/lib/getErrorMessage";

export function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const res = await auth.login(email, password);
      localStorage.setItem("token", res.data.token);
      navigate("/notes");
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  return (
    <main className={`${styles.page} flex items-center justify-center`}>
      <div
        className={`${styles.card} w-full flex flex-col items-center gap-7`}
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
          <p className={styles.subtitle}>Welcome back</p>
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
              autoComplete="current-password"
              placeholder="Enter password..."
              className={`${styles.input} w-full px-3 py-2.5`}
            />
          </div>

          <ErrorLabel error={error} className="text-center" />

          <button
            type="submit"
            className={`${styles.button} w-full py-2.5 mt-1 cursor-pointer`}
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className={styles.footer}>
          Don't have an account?{" "}
          <Link to="/register" className={styles.footerLink}>
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
