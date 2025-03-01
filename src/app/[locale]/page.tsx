import initTranslations from "@/i18n";
import Image from "next/image";
import {
  IconDocumentText,
  IconMirroringScreen,
  IconQuoteUp,
  IconSignpost,
} from "../_components/icons/icons";

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
      <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left container flex items-center justify-center w-full h-screen">
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
      <section className="container flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold text-primary-600">
          {t("someFeatures")}
        </h1>

        <div className="my-8 grid grid-cols-12 gap-4">
          <div className="relative col-span-4 flex flex-col gap-y-4 p-8 border border-primary-600 rounded-lg overflow-hidden">
            <div className="animate-pulse absolute inset-0 bg-gradient-to-tr from-tertiary-600"></div>

            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="font-bold text-lg flex items-center gap-x-2">
                <IconDocumentText className="size-8 text-primary-600" />
                {t("newspaper")}
              </h2>
              <p className="text-sm font-light">{t("newspaper_description")}</p>
            </div>
          </div>

          <div className="relative col-span-4 flex flex-col gap-y-4 p-8 border border-primary-600 rounded-lg overflow-hidden">
            <div className="animate-pulse absolute inset-0 bg-gradient-to-tr from-tertiary-600"></div>
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="font-bold text-lg flex items-center gap-x-2">
                <IconMirroringScreen className="size-8 text-primary-600" />
                {t("wall")}
              </h2>
              <p className="text-sm font-light">{t("wall_description")}</p>
            </div>
          </div>

          <div className="relative col-span-4 flex flex-col gap-y-4 p-8 border border-primary-600 rounded-lg overflow-hidden">
            <div className="animate-pulse absolute inset-0 bg-gradient-to-tr from-tertiary-600"></div>
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="font-bold text-lg flex items-center gap-x-2">
                <IconSignpost className="size-8 text-primary-600" />
                {t("post")}
              </h2>
              <p className="text-sm font-light">{t("post_description")}</p>
            </div>
          </div>
        </div>

        <section
          id="about-us"
          className="flex flex-col items-center gap-y-8 my-16"
        >
          <h1 className="text-3xl font-bold text-primary-600">
            {t("aboutUs")}
          </h1>

          <p className="text-secondary-200 text-center max-w-2xl">
            {t("aboutUs_description")}
          </p>
        </section>
      </section>
    </main>
  );
}
