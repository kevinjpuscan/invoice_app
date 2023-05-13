import styles from "./Button.module.scss";
import Image from "next/image";
import plusIcon from "@icons/icon-plus.svg";

type ButtonType =
  | "primary"
  | "plus"
  | "danger"
  | "action-1"
  | "action-2"
  | "action-expanded";

export function Button({
  children,
  type = "primary",
}: {
  children: React.ReactNode;
  type?: ButtonType;
}): JSX.Element {
  return (
    <button className={styles[type]}>
      {type === "plus" && (
        <div className={styles.icon}>
          <Image src={plusIcon} width={10} height={10} alt="icon plus" />
        </div>
      )}
      {children}
    </button>
  );
}
