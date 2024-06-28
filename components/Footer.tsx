import { contactDetails, navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-purple text-xl font-semibold">
          <Icons.logo className="w-36" />
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.url} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {socialLinks.map((link, index) => (
            <a
            target="_blank"
              href={link.url}
              key={index}
              className="w-10 h-10 bg-primary text-peach flex items-center justify-center rounded"
            >
              <link.icon strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      {/* contact details */}
      <div className="w-max border border-peach p-5 mx-auto flex flex-col tablet:flex-row items-center rounded-lg mt-5 gap-5 tablet:gap-10 ">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-3 items-center text-primary">
            <detail.icon size={20} />
            <p className="text-gray-600">{detail.text}</p>
          </div>
        ))}
      </div>

      {/* copyright text */}
      <p className="mt-8 text-gray-600 text-center text-sm">
        Copyright © {new Date().getFullYear()} Fikred Tech. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
