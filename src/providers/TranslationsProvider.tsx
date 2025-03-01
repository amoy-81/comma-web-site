"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/i18n";
import { createInstance } from "i18next";
import { ReactNode } from "react";
import { i18nNamespaces } from "@/constants/global.const";

type TranslationsProviderProps = {
  children: ReactNode;
  locale: string;
  resources?: Record<string, any>;
};

export default function TranslationsProvider({
  children,
  locale,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();

  initTranslations(locale, i18nNamespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
