import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import styles from "./backarrow.module.scss";

interface BackArrowProps {
  navigate: string;
}

export function BackArrow({ navigate }: BackArrowProps) {
  return (
    <Link to={navigate} className={styles.link}>
      <ArrowLeft size={16} />
      Back to notes
    </Link>
  );
}
