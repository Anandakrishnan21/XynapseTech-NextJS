import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/lib/data";
import Link from "next/link";

export function HamIcon() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          className="block h-7 w-7 dark:stroke-white dark:bg-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <ul className="list-none text-gray-900 dark:text-gray-100 mx-0 text-base bg-gray-100 dark:bg-gray-900 py-1 rounded">
            {links.map((link) => (
              <li
                className="py-4 px-5 hover:bg-zinc-200 dark:hover:bg-gray-800 border-b border-zinc-300 dark:border-gray-800 transition-all font-medium"
                key={link.hash}
              >
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
            <div className="text-center py-2">
              <Button variant="default">Get Started</Button>
            </div>
          </ul>
        </div>
        <SheetFooter>
          <div className="absolute left-10 right-10 bottom-8 text-gray-700">
            <p className="text-center">Xynapse Technologies 2023</p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
