import React from "react";
import Image from "next/image";
import man from "../../public/man.png"

export default function Avatar() {
  return (
    <div className="w-2/6 md:w-full md:h-2/3 flex justify-center items-center bg-slate-100 dark:bg-slate-900 rounded">
      <Image src={man} alt="person" className="w-48 p-2 object-cover" />
    </div>
  );
}

