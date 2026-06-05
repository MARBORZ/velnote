import { Navigate, Outlet } from "react-router";
import { Layout } from "./Layout/Layout";
import { isTokenValid } from "@/shared/lib/isTokenValid";

export function ProtectedRoute() {
  const token = localStorage.getItem("token") || "";

  if (!isTokenValid(token)) return <Navigate to={"/login"} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
