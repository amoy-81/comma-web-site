import {
  IconDocumentText,
  IconMirroringScreen,
  IconSignpost,
} from "@/app/_components/icons/icons";
import initTranslations from "@/i18n";
import { FC } from "react";
import FeatureCard from "./components/feature-card/FeatureCard";
import { SectionBaseProps } from "../@types/sections.type";
import Link from "next/link";

const features = [
  {
    icon: <IconDocumentText className="size-8 text-primary-600" />,
    titleKey: "newspaper",
    descriptionKey: "newspaper_description",
    href: "/newspapers",
  },
  {
    icon: <IconMirroringScreen className="size-8 text-primary-600" />,
    titleKey: "wall",
    descriptionKey: "wall_description",
    href: "/",
  },
  {
    icon: <IconSignpost className="size-8 text-primary-600" />,
    titleKey: "post",
    descriptionKey: "post_description",
    href: "/posts",
  },
];

const FeaturesSection: FC<SectionBaseProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  return (
    <section className="container flex flex-col items-center w-full max-lg:px-6">
      <h1 className="text-3xl font-bold text-primary-600">
        {t("someFeatures")}
      </h1>

      <div className="my-8 grid grid-cols-12 gap-4">
        {features.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="lg:col-span-4 col-span-12"
          >
            <FeatureCard
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
