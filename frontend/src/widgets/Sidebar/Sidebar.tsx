import { Link } from "react-router";
import styles from "./sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Notes App
        </Link>
        <ul className={styles.links}>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/notes/new">New Note</Link>
          </li>
        </ul>
        <div className={styles.bottom}>
            <Link to="/settings">Settings</Link>
          <button className={styles.logout}>Logout</button>
        </div>
      </nav>
    </aside>
  );
}
