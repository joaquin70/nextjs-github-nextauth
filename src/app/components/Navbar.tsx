"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" bg-blue-500 hover:bg-blue-700 text-white text-center  nav shadow p-2 justify-content-between mb-3">
      <Link className="nav-link" href="/login">
        Login in Github
      </Link>
    </nav>
  );
}
