import { FileText } from "lucide-react";
import styles from "./emptystate.module.scss";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "No notes yet",
  description = "Create your first note to get started",
}: EmptyStateProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrap}>
        <FileText size={32} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
