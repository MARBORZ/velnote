import styles from "./errorlabel.module.scss";

interface ErrorLabelProps {
  error?: string | null;
  className?: string;
}

export function ErrorLabel({ error, className }: ErrorLabelProps) {
  if (!error) return null;
  return <span className={`${styles.label} ${className ?? ""}`}>{error}</span>;
}
