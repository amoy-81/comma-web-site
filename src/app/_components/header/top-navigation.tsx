"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TopNavigation: React.FC = () => {
  const menuItems: NavigationMenuItem[] = [
    { title: "Home", href: "/" },
    { title: "Newspapers", href: "/courses" },
    { title: "Posts", href: "/blog" },
    { title: "About", href: "/blog" },
  ];

  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`} className="group relative">
            <Link
              href={item.href}
              className={`block rounded px-4 py-[10px] text-sm text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary ${
                isActive && "border-b-2 text-primary border-primary/30"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
