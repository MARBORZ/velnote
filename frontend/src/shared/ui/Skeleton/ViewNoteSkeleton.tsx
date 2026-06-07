import { Skeleton } from "./Skeleton";
import styles from "./viewnoteSkeleton.module.scss";

export function ViewNoteSkeleton() {
  return (
    <div className={styles.article}>
      {/* Meta */}
      <div className={styles.meta}>
        <Skeleton height="0.8125rem" width="96px" borderRadius="4px" />
        <Skeleton height="0.8125rem" width="64px" borderRadius="4px" />
      </div>

      {/* Title */}
      <Skeleton height="2.5rem" width="60%" borderRadius="8px" />

      {/* Divider */}
      <div className={styles.divider} />

      {/* Body lines */}
      <div className={styles.body}>
        <Skeleton height="0.9375rem" width="100%" borderRadius="5px" />
        <Skeleton height="0.9375rem" width="92%" borderRadius="5px" />
        <Skeleton height="0.9375rem" width="97%" borderRadius="5px" />
        <Skeleton height="0.9375rem" width="80%" borderRadius="5px" />
        <div style={{ height: "0.5rem" }} />
        <Skeleton height="0.9375rem" width="100%" borderRadius="5px" />
        <Skeleton height="0.9375rem" width="88%" borderRadius="5px" />
        <Skeleton height="0.9375rem" width="94%" borderRadius="5px" />
      </div>

      {/* Tags */}
      <div className={styles.tags}>
        <Skeleton height="1.375rem" width="56px" borderRadius="999px" />
        <Skeleton height="1.375rem" width="72px" borderRadius="999px" />
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Actions */}
      <div className={styles.actions}>
        <Skeleton height="2.25rem" width="72px" borderRadius="8px" />
        <Skeleton height="2.25rem" width="80px" borderRadius="8px" />
      </div>
    </div>
  );
}
