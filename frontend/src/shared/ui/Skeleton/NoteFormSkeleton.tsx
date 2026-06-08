import { Skeleton } from "./Skeleton";
import styles from "./noteformSkeleton.module.scss";

export function NoteFormSkeleton() {
  return (
    <div className={styles.card}>
      {/* Left — editor */}
      <div className={styles.left}>
        {/* Title */}
        <div className={styles.titleSection}>
          <Skeleton height="0.6875rem" width="40px" borderRadius="4px" />
          <Skeleton height="2rem" width="70%" borderRadius="6px" />
        </div>

        {/* Content */}
        <div className={styles.contentSection}>
          <Skeleton height="0.6875rem" width="120px" borderRadius="4px" />
          <Skeleton height="240px" width="100%" borderRadius="10px" />
        </div>

        {/* Tags */}
        <div className={styles.tagsSection}>
          <Skeleton height="0.6875rem" width="36px" borderRadius="4px" />
          <Skeleton height="2.25rem" width="100%" borderRadius="10px" />
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Skeleton height="2.25rem" width="84px" borderRadius="10px" />
          <Skeleton height="2.25rem" width="92px" borderRadius="10px" />
        </div>
      </div>

      {/* Right — preview */}
      <div className={styles.right}>
        <Skeleton height="0.6875rem" width="56px" borderRadius="4px" />
        <Skeleton height="100%" width="100%" borderRadius="10px" />
      </div>
    </div>
  );
}
