import type { ReactNode } from "react";
import { Sidebar } from "@/widgets/Sidebar";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 flex flex-col py-8 px-10 md:px-10 px-4 pt-16 md:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}
