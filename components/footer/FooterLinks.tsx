import React from "react";
import { links } from "@/lib/data";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="flex gap-16">
      <div>
        <p className="text-yellow-400 font-medium mb-2">Company</p>
        {links.map((link) => (
          <p key={link.hash}>
            <Link
              href={link.hash}
              className="text-sm rounded hover:bg-gray-100/25 text-gray-50 dark:text-gray-300 transition-all"
            >
              {link.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="text-sm text-gray-50 dark:text-gray-300">
        <p className="text-yellow-400 font-medium text-base mb-2">Contact Us</p>
        <div className="flex flex-col gap-1">
          <Link
            href="#contact"
            className="w-fit rounded hover:bg-gray-100/25 transition-all"
          >
            Send Messages
          </Link>
          <p>+91 7994555949</p>
          {/* <p>contact@xynapsetechnologies.com</p> */}
        </div>
      </div>
    </div>
  );
}
