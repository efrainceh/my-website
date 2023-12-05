import React from "react";
import IconBar from "./IconBar";
import Image from "next/image";

export default function ProfileBox() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src="/images/avatar.png"
          width={300}
          height={300}
          alt="image of my avatar"
        />
      </div>
      <div className="py-2">
        <h1 className="text-white text-4xl font-bold text-center">
          Efrain Ceh Pavia
        </h1>
      </div>
      <IconBar />
    </>
  );
}
