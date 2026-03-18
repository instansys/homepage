interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="mb-12 text-center text-3xl font-bold dark:text-white">
      {children}
    </h2>
  );
};
