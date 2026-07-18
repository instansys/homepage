import Image from "next/image";

interface ServiceCardProps {
  englishTitle: string;
  japaneseTitle: string;
  description: string;
  imageSrc?: string;
}

export function ServiceCard({
  englishTitle,
  japaneseTitle,
  description,
  imageSrc,
}: ServiceCardProps) {
  return (
    <article className="row-span-4 grid grid-rows-subgrid gap-0">
      <h3 className="font-[family-name:var(--font-oswald)] text-3xl font-medium italic tracking-wide text-[#3BA5B5] md:text-2xl lg:text-3xl">
        {englishTitle}
      </h3>
      <h4 className="mt-1 font-bold text-foreground">{japaneseTitle}</h4>
      <p className="text-foreground/80 mt-1 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mx-auto mt-2 aspect-[4/3] w-[70%] overflow-hidden rounded-full bg-[#6BB8C3]">
        {imageSrc ? (
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={japaneseTitle}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xl italic text-white/80">image</span>
          </div>
        )}
      </div>
    </article>
  );
}
