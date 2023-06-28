import React from 'react';

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div
    className="cursor-pointer hover:text-zinc-400 transition duration-300
    text-lg use-trebuchet text-zinc-300">
      {label}
    </div>
  )
}

export default NavbarItem;