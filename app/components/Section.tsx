interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export const Section = ({ children, id }: SectionProps) => {
  return (
    <section
      id={id}
      className="py-20 odd:bg-gray-50 odd:dark:bg-gray-800 even:bg-white even:dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};
