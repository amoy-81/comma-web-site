import Image from "next/image";
import React, { FC } from "react";
import { TopNavigation } from "./top-navigation";
import Link from "next/link";
import initTranslations from "@/i18n";
import { HeaderProps } from "./types/header.type";
import { API_BASE_URL } from "@/configs/global.config";

export const Header: FC<HeaderProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  const loginUrl = `${API_BASE_URL}/auth/google`;

  return (
    <div className="fixed max-xl:px-4 z-40 top-0 left-0 w-full flex justify-center items-center bg-secondary-600/80 backdrop-blur">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/comma-logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="h-8"
            />
            <h1 className="text-lg font-bold text-primary-600 translate-y-0.5">
              {t("comma")}
            </h1>
          </div>

          <div className="lg:flex items-center hidden justify-between px-4">
            <nav className="">
              <ul className="">
                <TopNavigation />
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-end lg:pr-0">
            <Link href={loginUrl}>
              <div className="p-2 bg-white rounded-lg text-secondary-600 flex items-center">
                {t("loginWithGoogle")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
