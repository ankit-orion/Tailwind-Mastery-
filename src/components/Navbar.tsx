import { title } from "process";
import React from "react";

export const Navbar = () => {
  const links = [
    {
      title: "Founders",
      href: "#",
    },
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
    
  ];
  return (
    <div className="navbar-root">
      <div className="logo">Orion</div>
      <div className="links">
        {links.map((link, idx) => (
          <a className="link-items" key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
        <button className="btn">Get started</button>
      </div>
    </div>
  );
};
