export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });
  const data = await res.json();

  return (
    <div>
      <h1>Dashboard (Dynamic)</h1>
      <p>{data.title}</p>
    </div>
  );
}
