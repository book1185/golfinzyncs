import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div style={{ height: "80px", background:"black"}} className="flex items-center pl-5 justify-center">
      <Image
        src="/logo2.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
    </div>
  );
}

export default Header;
