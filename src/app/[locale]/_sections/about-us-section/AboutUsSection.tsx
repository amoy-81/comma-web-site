import initTranslations from "@/i18n";
import { FC } from "react";
import { SectionBaseProps } from "../types/sections.type";

const AboutUsSection: FC<SectionBaseProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  return (
    <section
      id="about-us"
      className="flex flex-col items-center gap-y-8 my-16 bg-shape-pattern bg-no-repeat bg-center bg-cover p-8 border border-primary-600 rounded-lg"
    >
      <h1 className="text-3xl font-bold text-primary-600">{t("aboutUs")}</h1>

      <p className="text-secondary-200 text-center max-w-2xl">
        {t("aboutUs_description")}
      </p>
    </section>
  );
};

export default AboutUsSection;
