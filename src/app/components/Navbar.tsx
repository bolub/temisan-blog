import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="py-10 custom-container">
        <Link href="/">
          <span className="font-bold">Temisan&apos;s Blog</span>
        </Link>
      </nav>
    </>
  );
};
