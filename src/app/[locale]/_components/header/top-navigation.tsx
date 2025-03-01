"use client";

import { NavigationMenuItem } from "@/types/navigation-menu-item";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export const TopNavigation: React.FC = () => {
  const { t } = useTranslation();

  const menuItems: NavigationMenuItem[] = [
    { title: t("home"), href: "/" },
    { title: t("newspapers"), href: "/newspapers" },
    { title: t("posts"), href: "/posts" },
    { title: t("about"), href: "/#about-us" },
  ];

  const pathname = usePathname();

  const removeLocaleFromPath = (path: string) => {
    const localePattern = /^\/[a-z]{2}(\/|$)/;
    return path.replace(localePattern, "/");
  };

  const cleanedPathname = removeLocaleFromPath(pathname);

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = cleanedPathname === item.href;

        return (
          <li key={`navigation-${item.href}`} className="relative">
            <Link
              href={item.href}
              className={`block px-4 py-[10px] text-sm ${
                isActive && "text-primary-600 font-semibold"
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
