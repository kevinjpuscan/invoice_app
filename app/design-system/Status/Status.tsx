import styles from "./Status.module.scss";
import { type StatusType } from "@/core/domain/Invoice";

export function Status({ status }: { status: StatusType }): JSX.Element {
  return (
    <div className={styles[status]}>
      <span className={styles["text-container"]}>
        <div className={styles.circle} />
        <div className={styles.text}>{status}</div>
      </span>
    </div>
  );
}
