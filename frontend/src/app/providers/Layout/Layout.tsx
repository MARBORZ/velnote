import { useState } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "@/widgets/Sidebar";
import { TopBar } from "@/widgets/TopBar/TopBar";
import { BottomNav } from "@/widgets/BottomNav/BottomNav";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        {/* Main content */}
        <main className="flex-1 flex flex-col py-8 px-10 max-md:px-4 max-md:py-5 max-md:pb-28">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <BottomNav />
    </div>
  );
}
