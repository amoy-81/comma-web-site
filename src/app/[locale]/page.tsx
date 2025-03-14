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
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section
        className={classNames(
          "bg-hero-pattern bg-no-repeat bg-center max-xl:container flex max-lg:flex-col items-center justify-center w-full lg:h-screen max-lg:mt-20",
          locale === "en" ? "xl:bg-left" : "xl:bg-right"
        )}
      >
        <div className="flex flex-col items-start gap-y-8 p-12 ">
          <h1 className="md:text-7xl text-4xl font-bold text-primary-600 mb-4 flex items-center gap-x-2">
            <IconQuoteUp className="md:size-16 size-10 text-primary-600" />
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-secondary-200 mb-8">{t("heroSubTitle")}</p>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg">
            {t("getStarted")}
          </button>
        </div>
        <Image
          src="/hero-social.svg"
          className="max-xl:hidden max-sm:block max-sm:w-full"
          alt=""
          width={702}
          height={521}
        />
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
