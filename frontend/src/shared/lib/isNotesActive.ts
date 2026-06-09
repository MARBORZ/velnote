export function isNotesActive(pathname: string): boolean {
  return (
    pathname === "/notes" ||
    (pathname.startsWith("/notes/") && !pathname.startsWith("/notes/new"))
  );
}
