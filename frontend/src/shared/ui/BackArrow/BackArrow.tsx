import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import styles from "./backarrow.module.scss";

interface BackArrowProps {
  navigate: string;
  label?: string;
}

export function BackArrow({ navigate, label = "Back to notes" }: BackArrowProps) {
  return (
    <Link to={navigate} className={styles.link}>
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
