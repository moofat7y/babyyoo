import React from "react";
import NavMenu from "./ui/NavMenu";
import WalletBtn from "./ui/WalletBtn";

export default function NavBarEnd() {
  return (
    <div className="flex gap-3 items-center">
      <WalletBtn />
      <NavMenu />
    </div>
  );
}
