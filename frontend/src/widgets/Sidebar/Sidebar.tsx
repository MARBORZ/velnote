import { Link } from "react-router";
import styles from "./sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={`${styles.sidebar} sticky top-0 h-screen w-60 shrink-0`}>
      <nav className="flex flex-col h-full px-4 py-6">
        <Link to="/" className={`${styles.logo} text-lg font-bold mb-8 block`}>
          Notes App
        </Link>
        <ul className="flex flex-col gap-1 flex-1">
          <li>
            <Link to="/notes" className={`${styles.link} block px-3 py-2`}>
              Notes
            </Link>
          </li>
          <li>
            <Link to="/notes/new" className={`${styles.link} block px-3 py-2`}>
              New Note
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-1 pt-4 border-t border-gray-200">
          <Link to="/settings" className={`${styles.settings} block px-3 py-2 text-sm`}>
            Settings
          </Link>
          <button className={`${styles.logout} px-3 py-2 text-left text-sm w-full cursor-pointer`}>
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}
