import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import styles from "./backarrow.module.scss";

interface BackArrowProps {
  navigateTo: string;
  label?: string;
}

export function BackArrow({ navigateTo, label = "Back to notes" }: BackArrowProps) {
  return (
    <Link to={navigateTo} className={styles.link}>
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
