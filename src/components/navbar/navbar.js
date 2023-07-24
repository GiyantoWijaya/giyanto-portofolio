"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Giyanto-Portofolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#test">Work</Link>
          </li>
          <li>
            <Link href="#test">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
