import { FileText, CirclePlus } from "lucide-react";
import { Link } from "react-router";
import styles from "./emptystate.module.scss";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showAction?: boolean;
}

export function EmptyState({
  title = "No notes yet",
  description = "Create your first note to get started",
  showAction = true,
}: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrap}>
        <FileText size={32} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{description}</p>
      {showAction && (
        <Link to="/notes/new" className={styles.btn}>
          <CirclePlus size={16} />
          Create Note
        </Link>
      )}
    </div>
  );
}
