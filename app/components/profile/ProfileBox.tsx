import React from "react";
import Image from "next/image";
// import IconBar from "./IconBar";
import * as styles from "./styles";

export default function ProfileBox() {
  return (
    <div className={styles.profileBox}>
      <div className={styles.image}>
        <Image
          src="/images/avatar.png"
          width={300}
          height={300}
          alt="image of my avatar"
        />
      </div>
      <h1 className={styles.name}>Efrain Ceh Pavia</h1>
      {/* <IconBar /> */}
    </div>
  );
}
