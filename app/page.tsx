export const revalidate = false;

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        About Page (Static Rendering)
      </h1>
      <p className="mt-4 text-gray-600">
        This page is generated at build time using SSG.
      </p>
    </main>
  );
}
