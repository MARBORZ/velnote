import { Link, useLocation } from "react-router";
import { FileText, Plus, Settings } from "lucide-react";
import styles from "./bottomnav.module.scss";
import { isNotesActive } from "@/shared/lib/isNotesActive";

export function BottomNav() {
  const { pathname } = useLocation();

  const isNewActive = pathname.startsWith("/notes/new");
  const isSettingsActive = pathname.startsWith("/settings");

  return (
    <nav className={styles.bar}>
      <Link to="/notes" className={`${styles.item} ${isNotesActive(pathname) ? styles.itemActive : ""}`}>
        <FileText size={20} />
        <span>Notes</span>
      </Link>
      <Link to="/notes/new" className={`${styles.item} ${isNewActive ? styles.itemActive : ""}`}>
        <Plus size={20} />
        <span>New Note</span>
      </Link>
      <Link to="/settings" className={`${styles.item} ${isSettingsActive ? styles.itemActive : ""}`}>
        <Settings size={20} />
        <span>Settings</span>
      </Link>
    </nav>
  );
}
