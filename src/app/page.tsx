// src/app/page.tsx
import { Suspense } from 'react';
import BookList from '@/components/BookList';

function Loading() {
  return <div>Loading best sellers...</div>;
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <BookList />
    </Suspense>
  );
}