import { Link, useNavigate, useLocation } from "react-router";
import { FileText, CirclePlus, Settings, LogOut, X } from "lucide-react";
import styles from "./sidebar.module.scss";
import { logout } from "@/shared/lib/logout";
import { useUser } from "@/shared/hooks/useUser";
import logoIcon from "@/shared/ui/Logo/logo.svg";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useUser();

  const isNotesActive =
    pathname === "/notes" ||
    (pathname.startsWith("/notes/") && !pathname.startsWith("/notes/new"));
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""}`}>
        <nav className={`${styles.nav} flex flex-col h-full`}>

          {/* Logo row + close btn */}
          <div className={styles.logoRow}>
            <Link to="/notes" className={styles.logoLink} onClick={onClose}>
              <img src={logoIcon} alt="Velnote" width={36} height={36} className={styles.logoIcon} />
              <span className={styles.logoText}>Velnote</span>
            </Link>
            <button className={styles.closeBtn} onClick={onClose} type="button" aria-label="Close">
              <X size={18} />
            </button>
          </div>

          {/* Nav items */}
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
            <li>
              <Link
                to="/settings"
                className={`${styles.link} ${isActive("/settings") ? styles.linkActive : ""}`}
                onClick={onClose}
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>

          {/* Bottom — user info + logout */}
          <div className={styles.bottom}>
            <div className={styles.userRow}>
              <div className={styles.avatar}>{user.email?.[0]?.toUpperCase() ?? "U"}</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>User</span>
                <span className={styles.userEmail}>{user.email}</span>
              </div>
            </div>
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
