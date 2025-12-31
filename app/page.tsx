export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Multi-Environment Demo</h1>

      <p className="mt-4">
        Environment: <b>{process.env.APP_ENV}</b>
      </p>

      <p>
        API URL: <b>{process.env.NEXT_PUBLIC_API_URL}</b>
      </p>
    </main>
  );
}
