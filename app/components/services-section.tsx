import { ServiceCard } from "./service-card";

const services = [
  {
    englishTitle: "DX SUPPORT",
    japaneseTitle: "システム開発",
    description:
      "お客様のニーズに合わせ、最適なお値段で最適なシステムを要件定義からメンテナンスまで開発担当いたします。",
    imageSrc: "/top-services/service-1.jpg",
  },
  {
    englishTitle: "SYSTEM DEV",
    japaneseTitle: "ITコンサルティング",
    description: "技術選定から運用まで、幅広くサポートいたします。",
    imageSrc: "/top-services/service-2.jpg",
  },
  {
    englishTitle: "DX",
    japaneseTitle: "DX支援",
    description: "デジタル化による業務効率化をサポートします。",
    imageSrc: "/top-services/service-3.jpg",
  },
  {
    englishTitle: "VOICE ACTOR",
    japaneseTitle: "CV・ナレーション",
    description: "代表者 松尾 弥玖人がナレーションやCVを担当いたします。",
    imageSrc: "/top-services/service-4.jpg",
  },
];

export function ServicesSection() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-2">
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:grid-rows-[repeat(8,auto)]">
        {services.map((service) => (
          <ServiceCard
            key={service.englishTitle}
            englishTitle={service.englishTitle}
            japaneseTitle={service.japaneseTitle}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
