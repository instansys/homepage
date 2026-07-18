import { ServiceCard } from "./service-card";

const services = [
  {
    englishTitle: "SYSTEM DEVELOPMENT",
    japaneseTitle: "受託システム開発",
    description:
      "要件定義から運用まで。AIを使いこなす少数精鋭が、短期間・適正価格でシステムを開発いたします。",
    imageSrc: "/top-services/system-development.svg",
  },
  {
    englishTitle: "AI & AUTOMATION",
    japaneseTitle: "業務自動化・AI導入支援",
    description:
      "手作業やExcel頼みの業務を自動化。生成AIの導入から定着まで、現場に合わせて伴走いたします。",
    imageSrc: "/top-services/ai-automation.svg",
  },
  {
    englishTitle: "TECH ADVISORY",
    japaneseTitle: "ITコンサルティング・技術顧問",
    description:
      "技術選定や開発体制づくり、既存システムの改善まで、技術面の意思決定を支援いたします。",
    imageSrc: "/top-services/tech-advisory.svg",
  },
];

export function ServicesSection() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-2">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:grid-rows-[repeat(4,auto)]">
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
