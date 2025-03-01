import {
  IconDocumentText,
  IconMirroringScreen,
  IconSignpost,
} from "@/app/_components/icons/icons";
import initTranslations from "@/i18n";
import { FC } from "react";
import FeatureCard from "./components/feature-card/FeatureCard";

const features = [
  {
    icon: <IconDocumentText className="size-8 text-primary-600" />,
    titleKey: "newspaper",
    descriptionKey: "newspaper_description",
  },
  {
    icon: <IconMirroringScreen className="size-8 text-primary-600" />,
    titleKey: "wall",
    descriptionKey: "wall_description",
  },
  {
    icon: <IconSignpost className="size-8 text-primary-600" />,
    titleKey: "post",
    descriptionKey: "post_description",
  },
];

const FeaturesSection: FC<SectionBaseProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale);

  return (
    <section className="container flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold text-primary-600">
        {t("someFeatures")}
      </h1>

      <div className="my-8 grid grid-cols-12 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={t(feature.titleKey)}
            description={t(feature.descriptionKey)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
