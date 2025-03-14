import TranslationsProvider from "@/providers/TranslationsProvider";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { Vazirmatn, Nunito } from "next/font/google";
import initTranslations from "@/i18n";
import { dir } from "i18next";
import { i18nConfig } from "../../../i18nConfig";
import Head from "next/head";

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
      <Head>
        <meta
          name="description"
          content="کاما یک شبکه اجتماعی جدید است که برای ارتباط یکپارچه طراحی شده است. در کاما، کاربران می توانند افکار، عکس ها و ویدیوها را فورا به اشتراک بگذارند."
        />
        <meta
          name="google-site-verification"
          content="eCnqvJdGCkid9rp9ukfR8X4-3ZgSSGHsd2OWdN-FhaA"
        />
        <meta name="keywords" content="کاما" />
        <meta name="keywords" content="شبکه اجتماعی" />
        <meta name="keywords" content="پست" />
        <meta name="keywords" content="پارک علم و فناوری" />
        <meta name="keywords" content="پارک علم و فناوری رشت" />
        <meta property="og:title" content="شبکه اجتماعی کاما" />
        <meta
          property="og:description"
          content="کاما یک شبکه اجتماعی جدید است که برای ارتباط یکپارچه طراحی شده است."
        />
        <meta property="og:image" content="/vercel.svg" />
      </Head>

      <body className="text-white min-h-screen grid grid-rows-[1fr_auto] bg-secondary-600">
        <TranslationsProvider locale={locale} resources={resources}>
          <Header locale={locale} />
          <div className="bg-gradient-to-b to-secondary-1000 from-secondary-600">
            {children}
          </div>
          <Footer locale={locale} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
