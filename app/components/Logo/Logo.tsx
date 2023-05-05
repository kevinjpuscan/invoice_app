import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import styles from "./Logo.module.scss";

export function Logo(): JSX.Element {
  return (
    <div className={styles.base}>
      <div className={styles.shadow} />
      <Image
        className={styles.logo}
        src={logo}
        width={28}
        height={26}
        alt="logo"
      />
    </div>
  );
}
