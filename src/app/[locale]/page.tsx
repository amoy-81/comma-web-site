import initTranslations from "@/i18n";
import Image from "next/image";
import { IconQuoteUp } from "../_components/icons/icons";
import FeaturesSection from "./_sections/features-section/FeaturesSection";
import AboutUsSection from "./_sections/about-us-section/AboutUsSection";
import classNames from "classnames";
import WhatIsComma from "./_sections/what-is-comma/WhatIsComma";

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

const i18nNamespaces = ["default"];

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <main className="flex flex-col items-center bg-gradient-to-b to-secondary-1000 from-secondary-600">
      {/* Hero */}
      <section
        className={classNames(
          "bg-hero-pattern bg-no-repeat bg-center container flex items-center justify-center w-full h-screen",
          locale === "en" ? "xl:bg-left" : "xl:bg-right"
        )}
      >
        <div className="flex flex-col items-start gap-y-8 p-12 ">
          <h1 className="text-7xl font-bold text-primary-600 mb-4 flex items-center gap-x-2">
            <IconQuoteUp className="size-16 text-primary-600" />
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-secondary-200 mb-8">{t("heroSubTitle")}</p>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg">
            {t("getStarted")}
          </button>
        </div>
        <Image src="/hero-social.svg" alt="" width={702} height={521} />
      </section>

      {/* What is Comma */}
      <WhatIsComma locale={locale} />

      {/* Features */}
      <FeaturesSection locale={locale} />

      {/* About Us */}
      <AboutUsSection locale={locale} />
    </main>
  );
}
