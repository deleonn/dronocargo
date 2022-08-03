import React from "react";
import { AccountCircleIcon } from "./icons";

interface HeaderProps {
  title?: string;
  username: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Dronocargo", username }) => {
  return (
    <div className="flex w-full justify-between px-9 py-6">
      <h1 className="text-base font-semibold">{title}</h1>
      <div className="flex items-center justify-center">
        <p className="mr-2">{username}</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
