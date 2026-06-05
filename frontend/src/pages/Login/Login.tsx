import { Link, useNavigate } from "react-router";
import styles from "./login.module.scss";
import { auth } from "@/shared/api/auth";

export function Login() {
  const navigate = useNavigate()

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const res = await auth.login(email, password)
    localStorage.setItem('token', res.data.token)
    navigate('/notes')
  }

  return (
    <main className={`${styles.page} flex items-center justify-center`}>
      <div className={`${styles.card} w-full max-w-md p-8`}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="flex flex-col gap-4" action={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" name="email" autoComplete="email" className={`${styles.input} w-full px-3 py-2`} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input id="password" type="password" name="password" autoComplete="current-password" className={`${styles.input} w-full px-3 py-2`} />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <button type="submit" className={`${styles.button} w-full py-2 cursor-pointer`}>
              Login
            </button>
            <p className="text-sm text-center">
              No account? <Link to="/register">Register.</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
