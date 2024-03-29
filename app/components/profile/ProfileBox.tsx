import React from "react";
import Image from "next/image";
import IconBar from "./IconBar";
import * as styles from "./styles";

export default function ProfileBox() {
  return (
    <div className={styles.profileBox}>
      <div className={styles.image}>
        <Image
          src="/images/avatar.png"
          priority
          fill
          sizes="(max-width: 450px) 80vw, 50vw"
          alt="image of my avatar"
        />
      </div>
      <h1 className={styles.name}>Efrain Ceh Pavia</h1>
      <IconBar />
    </div>
  );
}
