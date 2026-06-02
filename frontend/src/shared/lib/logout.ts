import type { NavigateFunction } from "react-router";

export const logout = (navigate: NavigateFunction) => {
  localStorage.removeItem("token");
  navigate("/login");
};
