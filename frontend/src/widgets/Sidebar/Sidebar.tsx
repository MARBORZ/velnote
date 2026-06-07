import { Link, useNavigate, useLocation } from "react-router";
import { FileText, CirclePlus, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./sidebar.module.scss";
import { logout } from "@/shared/lib/logout";
import logoIcon from "@/shared/ui/Logo/logo.svg";

export function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isNotesActive =
    pathname === "/notes" ||
    (pathname.startsWith("/notes/") && !pathname.startsWith("/notes/new"));
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const close = () => setOpen(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        type="button"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && <div className={styles.overlay} onClick={close} />}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${open ? styles.sidebarOpen : ""} sticky top-0 h-screen shrink-0`}>
        {/* Mobile close */}
        <button className={styles.closeBtn} onClick={close} type="button" aria-label="Close menu">
          <X size={20} />
        </button>

        <nav className={`${styles.nav} flex flex-col h-full`}>
          <Link to="/notes" className={styles.logoRow} onClick={close}>
            <img src={logoIcon} alt="Velnote" width={36} height={36} className={styles.logoIcon} />
            <span className={styles.logoText}>Velnote</span>
          </Link>

          <ul className="flex flex-col gap-1 flex-1">
            <li>
              <Link
                to="/notes"
                className={`${styles.link} ${isNotesActive ? styles.linkActive : ""}`}
                onClick={close}
              >
                <FileText size={18} />
                <span className={styles.linkText}>Notes</span>
              </Link>
            </li>
            <li>
              <Link
                to="/notes/new"
                className={`${styles.link} ${isActive("/notes/new") ? styles.linkActive : ""}`}
                onClick={close}
              >
                <CirclePlus size={18} />
                <span className={styles.linkText}>New Note</span>
              </Link>
            </li>
          </ul>

          <div className={`${styles.bottom} flex flex-col gap-1`}>
            <Link
              to="/settings"
              className={`${styles.link} ${isActive("/settings") ? styles.linkActive : ""}`}
              onClick={close}
            >
              <Settings size={18} />
              <span className={styles.linkText}>Settings</span>
            </Link>
            <button
              type="button"
              className={styles.logoutBtn}
              onClick={() => logout(navigate)}
            >
              <LogOut size={18} />
              <span className={styles.linkText}>Log out</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
