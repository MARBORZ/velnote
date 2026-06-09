import styles from "./errorlabel.module.scss";

interface ErrorLabelProps {
  error?: string | null;
}

export function ErrorLabel({ error }: ErrorLabelProps) {
  if (!error) return null;
  return <span className={styles.label}>{error}</span>;
}
