import { Navigate, Outlet } from "react-router";
import { Layout } from "./Layout/Layout";
import { useUser } from "@/shared/hooks/useUser";

export function ProtectedRoute() {
  const token: string = localStorage.getItem("token") || "";
  if (!token || !useUser()) return <Navigate to={"/login"} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
