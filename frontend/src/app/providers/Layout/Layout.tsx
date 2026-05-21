import type { ReactNode } from "react";
import { Sidebar } from "@/widgets/Sidebar";
import styles from "./layout.module.scss";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
