import initTranslations from "@/i18n";
import { SectionBaseProps } from "../@types/sections.type";
import { FC } from "react";

const WhatIsComma: FC<SectionBaseProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  return (
    <section className="container flex flex-col items-center w-full mb-28">
      <h1 className="text-3xl font-bold text-primary-600">
        {t("whatIsComma")}
      </h1>

      <p className="my-8 text-sm text-center md:px-28">
        {t("whatIsCommaText")}
      </p>
    </section>
  );
};

export default WhatIsComma;
