import styles from "./status.module.scss";

type StatusType = "pending" | "paid" | "draft";
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
