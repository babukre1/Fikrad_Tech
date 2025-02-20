import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach-100">
      <Link href={"/"}>
        <Icons.logo className="w-40" />
      </Link>
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>
        <Link href={"/contact"} className="btn btn-primary">
          <Phone size={24} />
          Contact me
        </Link>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
