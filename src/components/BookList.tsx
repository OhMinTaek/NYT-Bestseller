// src/components/BookList.tsx
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

interface List {
  list_name: string;
  display_name: string;
}

async function getBestsellerLists() {
  const response = await fetch('https://books-api.nomadcoders.workers.dev/lists');
  if (!response.ok) {
    throw new Error('Failed to fetch bestseller lists');
  }
  return response.json();
}

export default async function BookList() {
  const { results } = await getBestsellerLists();

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>NYT Bestseller Lists</h1> */}
      <div className={styles.grid}>
        {results.map((list: List) => (
          <Link
            href={`/list/${encodeURIComponent(list.list_name)}`}
            key={list.list_name}
            className={styles.card}
          >
            <h2>{list.display_name}</h2>
            <p>View bestsellers →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}