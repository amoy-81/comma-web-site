import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { Vazirmatn, Nunito } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${vazirmatn.variable} ${nunito.variable}`}>
      <body className="text-base-content min-h-screen grid grid-rows-[80px_1fr_auto] bg-base-100">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
