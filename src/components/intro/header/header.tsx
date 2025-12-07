"use client";

// imports

// hooks
import { useState } from "react";

// components
import Logo from "@/svgs/logo";
import Nav from "./nav";
import MenuIcon from "@/svgs/menuIcon";
import CloseIcon from "@/svgs/closeIcon";
import CTA from "@/components/ui/CTA";

export default function Header() {

  // menu state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // toggle menu function
  const toggleMenu = (state : boolean) => {
    setMenuOpen(!state);
  };

  return (
    <header className="flex items-center md:justify-evenly justify-between px-4 h-28">
      <Logo />
      <Nav menuOpen={menuOpen} setmenuOpen={setMenuOpen} />
      <button name="menu" aria-label="menu" onClick={() => toggleMenu(menuOpen)} className="md:hidden">
        {
          menuOpen ?
          <CloseIcon />
          :
          <MenuIcon />
        }
      </button>
      <div className="hidden md:block">
        <CTA />
      </div>
    </header>
  )
}
