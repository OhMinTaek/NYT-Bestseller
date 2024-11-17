import Image from 'next/image';
import styles from '@/styles/ListName.module.css';
import { Metadata } from 'next';

interface Book {
  primary_isbn10: string;
  book_image: string;
  title: string;
  author: string;
  description: string;
  amazon_product_url: string;
}

// Metadata를 설정할 때, generateMetadata의 타입을 명확히 정의
export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  return {
    title: `${decodeURIComponent(params.name)} - NYT Bestsellers`,
  };
}

// 메인 페이지 컴포넌트
export default async function BookListPage({ params }: { params: { name: string } }) {
  const decodedName = decodeURIComponent(params.name);

  try {
    // API 데이터 가져오기
    const response = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${encodeURIComponent(decodedName)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books for category: ${decodedName}`);
    }

    const data = await response.json();
    const books: Book[] = data.results.books;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{decodedName} Bestsellers</h1>
        <div className={styles.grid}>
          {books.map((book) => (
            <div key={book.primary_isbn10} className={styles.book}>
              <div className={styles.imageWrapper}>
                <Image
                  src={book.book_image}
                  alt={book.title}
                  className={styles.image}
                  width={200}
                  height={300}
                />
              </div>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.author}>{book.author}</p>
              <a
                href={book.amazon_product_url}
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className={styles.error}>
        <h1>Error loading books</h1>
        <p>{error instanceof Error ? error.message : 'An unknown error occurred'}</p>
      </div>
    );
  }
}