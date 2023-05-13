import Image from "next/image";
import iconMoon from "@/assets/icons/icon-moon.svg";
import styles from "./Navbar.module.scss";
import avatar from "@/assets/images/image-avatar.jpg";
import { Logo } from "@/src/components/Logo/Logo";

export function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles["brand-container"]}>
        <Logo />
        <div className={styles["dark-mode"]}>
          <Image src={iconMoon} width={20} height={20} alt="moon icon" />
        </div>
      </div>
      <div className={styles["avatar-container"]}>
        <div className={styles.avatar}>
          <Image
            src={avatar}
            width={32}
            height={32}
            alt="user avatar"
            priority={true}
          />
        </div>
      </div>
    </nav>
  );
}
