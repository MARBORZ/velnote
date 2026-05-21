import type { ReactNode } from "react";
import { Header } from "../../widgets/Header";
import { Footer } from "../../widgets/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
