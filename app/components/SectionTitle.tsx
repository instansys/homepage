interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
      {children}
    </h2>
  );
};
