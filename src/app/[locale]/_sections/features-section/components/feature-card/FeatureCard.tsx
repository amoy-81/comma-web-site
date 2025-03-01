import { FC } from "react";
import { FeaturesSectionProps } from "../../types/features-section.type";

const FeatureCard: FC<FeaturesSectionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative col-span-4 flex flex-col gap-y-4 p-8 border border-primary-600 rounded-lg overflow-hidden bg-box-pattern bg-no-repeat bg-center bg-cover">
      <div className="animate-pulse absolute inset-0 bg-gradient-to-tr from-tertiary-600"></div>
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="font-bold text-lg flex items-center gap-x-2">
          {icon}
          {title}
        </h2>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
