import type { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg transition-shadow hover:shadow-xl md:p-6 dark:bg-gray-900">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 md:h-12 md:w-12 dark:bg-blue-900">
        <Icon size={20} className="md:text-2xl dark:text-blue-300" />
      </div>
      <h3 className="mb-2 text-lg font-bold md:mb-3 md:text-xl dark:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};
