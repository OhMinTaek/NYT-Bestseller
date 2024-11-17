import Link from 'next/link';
import styles from '@/styles/BookList.module.css';

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
  const { results }: { results: List[] } = await getBestsellerLists();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NYT Bestseller Lists</h1>
      <div className={styles.grid}>
        {results.map((list) => (
          <div key={list.list_name} className={styles.card}>
            <h2>{list.display_name}</h2>
            <Link href={`/list/${encodeURIComponent(list.list_name)}`} className={styles.cardLink}>
              View Bestsellers
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}