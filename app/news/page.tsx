export const revalidate = 60;

export default async function News() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const news = await res.json();

  return (
    <div>
      <h1>News Page (Hybrid)</h1>
      <p>Updates every 60 seconds</p>
      {news.slice(0, 5).map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
