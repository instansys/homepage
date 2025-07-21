export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="flex justify-center py-24 my-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-6xl font-bold underline underline-offset-[0.8rem] decoration-primary text-black dark:text-white">
        Games
      </h1>
    </section>
  );
}
