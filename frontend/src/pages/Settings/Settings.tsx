import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";
import { useEffect, useRef, type MouseEvent } from "react";
import styles from "./settings.module.scss";
import { useUser } from "@/shared/hooks/useUser";
import { logout } from "@/shared/lib/logout";
import { useNavigate } from "react-router";

export function Settings() {
  const navigate = useNavigate();
  const user = useUser();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      toggleRef.current?.classList.add(styles.active);
    }
  }, []);

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    document.documentElement.classList.toggle("dark");
    e.currentTarget.classList.toggle(styles.active);
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <BackArrow navigate="/notes" />

      <h1 className={`${styles.heading} ${styles.headingCentered}`}>Settings</h1>

      <div className={styles.content}>

        {/* Profile */}
        <span className={styles.sectionLabel}>Profile</span>
        <div className={styles.card}>
          <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
          <div className={styles.userInfo}>
            <span className={styles.email}>{user.email}</span>
            <span className={styles.role}>{user.role}</span>
          </div>
        </div>

        {/* Appearance */}
        <span className={styles.sectionLabel}>Appearance</span>
        <div className={styles.settingRow}>
          <div>
            <p className={styles.settingLabel}>Dark mode</p>
            <p className={styles.settingDesc}>Switch between light and dark theme</p>
          </div>
          <button className={styles.toggle} onClick={handleToggle} ref={toggleRef}>
            <span className={styles.toggleThumb} />
          </button>
        </div>

        {/* Account */}
        <span className={styles.sectionLabel}>Account</span>
        <div className={styles.settingRow}>
          <div>
            <p className={styles.settingLabel}>Log out</p>
            <p className={styles.settingDesc}>Sign out of your account</p>
          </div>
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={() => logout(navigate)}
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  );
}
