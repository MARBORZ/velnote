import { Link, useNavigate, useLocation } from "react-router";
import { FileText, CirclePlus, Settings, LogOut } from "lucide-react";
import styles from "./sidebar.module.scss";
import { logout } from "@/shared/lib/logout";
import logoIcon from "@/shared/ui/Logo/logo.svg";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isNotesActive =
    pathname === "/notes" ||
    (pathname.startsWith("/notes/") && !pathname.startsWith("/notes/new"));
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Overlay — mobile only */}
      {open && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
        <nav className={`${styles.nav} flex flex-col h-full`}>

          <Link to="/notes" className={styles.logoRow} onClick={onClose}>
            <img src={logoIcon} alt="Velnote" width={36} height={36} className={styles.logoIcon} />
            <span className={styles.logoText}>Velnote</span>
          </Link>

          <ul className="flex flex-col gap-1 flex-1">
            <li>
              <Link
                to="/notes"
                className={`${styles.link} ${isNotesActive ? styles.linkActive : ""}`}
                onClick={onClose}
              >
                <FileText size={18} />
                <span>Notes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/notes/new"
                className={`${styles.link} ${isActive("/notes/new") ? styles.linkActive : ""}`}
                onClick={onClose}
              >
                <CirclePlus size={18} />
                <span>New Note</span>
              </Link>
            </li>
          </ul>

          <div className={`${styles.bottom} flex flex-col gap-1`}>
            <Link
              to="/settings"
              className={`${styles.link} ${isActive("/settings") ? styles.linkActive : ""}`}
              onClick={onClose}
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
            <button
              type="button"
              className={styles.logoutBtn}
              onClick={() => logout(navigate)}
            >
              <LogOut size={18} />
              <span>Log out</span>
            </button>
          </div>

        </nav>
      </aside>
    </>
  );
}
