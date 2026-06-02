export const useUser = () => {
  const token: string = localStorage.getItem("token") || "";
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const payload = JSON.parse(atob(base64));
  return payload;
};
