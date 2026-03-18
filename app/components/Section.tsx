interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section
      id={id}
      className={[
        "py-12 odd:bg-gray-50 even:bg-white md:py-12 odd:dark:bg-gray-800 even:dark:bg-gray-900",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
