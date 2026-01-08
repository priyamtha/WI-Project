export const revalidate = 60;

type NewsItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function News() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const news: NewsItem[] = await res.json();

  return (
    <div>
      <h1>News Page (Hybrid)</h1>
      <p>Updates every 60 seconds</p>

      {news.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
