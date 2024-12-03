import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2 py-2 border-b-2">
        <Link href={"/"} className="flex items-center">
          <Image src={"/logo.svg"} alt="Formify logo" width={50} height={50} />
          <p className="font-bold text-xl">
            Formi<span className="text-[#d91656]">fy</span>
          </p>
        </Link>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
