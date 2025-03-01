import TranslationsProvider from "@/providers/TranslationsProvider";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { Vazirmatn, Nunito } from "next/font/google";
import initTranslations from "@/i18n";
import { dir } from "i18next";
import { i18nConfig } from "../../../i18nConfig";

const vazirmatn = Vazirmatn({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
});

const nunito = Nunito({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale);

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${vazirmatn.variable} ${nunito.variable}`}
    >
      <body className="text-white min-h-screen grid grid-rows-[80px_1fr_auto] bg-secondary-600">
        <TranslationsProvider locale={locale} resources={resources}>
          <Header locale={locale} />
          <div>{children}</div>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
