import type { ReactNode } from "react";
import { Sidebar } from "@/widgets/Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col py-6 px-8">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
