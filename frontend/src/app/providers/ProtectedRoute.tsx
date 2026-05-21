import { Navigate, Outlet } from "react-router";
import { Layout } from "./Layout/Layout";

export function ProtectedRoute() {
  const token: string | null = localStorage.getItem("token");

  if (!token) return <Navigate to={"/login"} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
