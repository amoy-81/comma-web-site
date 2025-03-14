import initTranslations from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FooterProps } from "./types/footer.type";

export const Footer: FC<FooterProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  return (
    <footer className="flex justify-center items-center gap-2 h-16 bg-box-pattern bg-no-repeat bg-center bg-cover bg-secondary-900">
      <div className="flex items-center gap-2">
        <Image
          src="/comma-logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="h-8"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm">{t("approvedBy")}</p>
        <Link
          href="https://www.gstp.ir"
          className="text-primary-600 text-sm font-semibold"
        >
          {t("gstp")}
        </Link>
      </div>
      |
      <div className="flex items-center gap-2">
        <p className="text-sm">{t("poweredBy")}</p>
        <Link
          href="https://solix-team.ir"
          className="text-primary-600 text-sm font-semibold"
        >
          {t("solix")}
        </Link>
      </div>
    </footer>
  );
};
