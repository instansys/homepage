export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="my-8 flex justify-center bg-gray-100 py-24 dark:bg-gray-800">
      <h1 className="text-6xl font-bold text-black underline decoration-primary underline-offset-[0.8rem] dark:text-white">
        Games
      </h1>
    </section>
  );
}
