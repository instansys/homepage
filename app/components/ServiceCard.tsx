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
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <Icon size={20} className="dark:text-blue-300 md:text-2xl" />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 dark:text-white">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
