import initTranslations from "@/i18n";
import Image from "next/image";

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
    <main className="w-full flex flex-col items-center justify-center">
      {/* Hero */}
      <section className="container flex items-center justify-center w-full">
        <div className="flex flex-col items-start gap-y-8 p-12">
          <h1 className="text-7xl font-bold text-primary-600 mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-secondary-200 mb-8">{t("heroSubTitle")}</p>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg">
            {t("getStarted")}
          </button>
        </div>
        <Image src="/hero-social.svg" alt="" width={702} height={521} />
      </section>
    </main>
  );
}
