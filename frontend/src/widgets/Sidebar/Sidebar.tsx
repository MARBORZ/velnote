import { Link, useNavigate, useLocation } from "react-router";
import { FileText, CirclePlus, Settings, LogOut } from "lucide-react";
import styles from "./sidebar.module.scss";
import { logout } from "@/shared/lib/logout";
import logoIcon from "@/shared/ui/Logo/logo.svg";

export function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className={`${styles.sidebar} sticky top-0 h-screen shrink-0`} style={{ width: "260px" }}>
      <nav className={`${styles.nav} flex flex-col h-full`}>

        {/* Logo */}
        <Link to="/notes" className={styles.logoRow}>
          <img src={logoIcon} alt="Velnote" width={36} height={36} className={styles.logoIcon} />
          <span className={styles.logoText}>Velnote</span>
        </Link>

        {/* Nav */}
        <ul className="flex flex-col gap-1 flex-1">
          <li>
            <Link
              to="/notes"
              className={`${styles.link} ${isActive("/notes") ? styles.linkActive : ""}`}
            >
              <FileText size={18} />
              Notes
            </Link>
          </li>
          <li>
            <Link
              to="/notes/new"
              className={`${styles.link} ${isActive("/notes/new") ? styles.linkActive : ""}`}
            >
              <CirclePlus size={18} />
              New Note
            </Link>
          </li>
        </ul>

        {/* Bottom */}
        <div className={`${styles.bottom} flex flex-col gap-1`}>
          <Link
            to="/settings"
            className={`${styles.link} ${isActive("/settings") ? styles.linkActive : ""}`}
          >
            <Settings size={18} />
            Settings
          </Link>
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={() => logout(navigate)}
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>

      </nav>
    </aside>
  );
}
