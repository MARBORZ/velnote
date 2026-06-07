import { Skeleton } from "./Skeleton";
import styles from "./notecardSkeleton.module.scss";

export function NoteCardSkeleton() {
  return (
    <div className={styles.card}>
      <Skeleton height="1.125rem" width="55%" borderRadius="6px" />
      <Skeleton height="0.875rem" width="90%" borderRadius="5px" />
      <Skeleton height="0.875rem" width="75%" borderRadius="5px" />
      <div className={styles.bottom}>
        <Skeleton height="1.25rem" width="64px" borderRadius="999px" />
        <Skeleton height="0.75rem" width="72px" borderRadius="4px" />
      </div>
    </div>
  );
}
