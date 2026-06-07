import { Menu } from "lucide-react";
import { Link } from "react-router";
import styles from "./topbar.module.scss";
import logoIcon from "@/shared/ui/Logo/logo.svg";

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className={styles.bar}>
      <Link to="/notes" className={styles.logo}>
        <img src={logoIcon} alt="Velnote" width={32} height={32} className={styles.logoIcon} />
      </Link>
      <button type="button" className={styles.menuBtn} onClick={onMenuClick} aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  );
}
