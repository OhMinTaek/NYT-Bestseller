// src/app/list/[name]/page.tsx
import Image from 'next/image';
import styles from './Detail.module.css';

interface Book {
  primary_isbn10: string;
  book_image: string;
  title: string;
  author: string;
  description: string;
  amazon_product_url: string;
}

interface PageProps {
  params: {
    name: string;
  };
}

export default async function BookListPage({
  params,
}: PageProps): Promise<JSX.Element> {
  try {
    const response = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${params.name}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const { results } = await response.json();

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{decodeURIComponent(params.name)}</h1>
        <div className={styles.grid}>
          {results.books.map((book: Book) => (
            <div key={book.primary_isbn10} className={styles.book}>
              <div className={styles.imageWrapper}>
                <Image
                  src={book.book_image}
                  alt={book.title}
                  className={styles.image}
                  width={200}
                  height={300}
                  priority
                />
              </div>
              <div className={styles.info}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.author}>{book.author}</p>
                <p className={styles.description}>{book.description}</p>
                <a
                  href={book.amazon_product_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className={styles.error}>
        <h1>Error loading books</h1>
        <p>{error instanceof Error ? error.message : 'Unknown error occurred'}</p>
      </div>
    );
  }
}