import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams: Record<string, string>;
};

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
  searchParams,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  function getPageUrl(page: number) {
    const params = new URLSearchParams({
      ...searchParams,
      page: String(page),
    });

    return `${baseUrl}?${params.toString()}`;
  }

  function getVisiblePages() {
    const visiblePages = [];
    const rangeWithDots = [];
    const delta = 2;
    const startPage = Math.max(2, currentPage - delta);
    const endPage = Math.min(totalPages - 1, currentPage + delta);
    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }
    rangeWithDots.push(...visiblePages);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }
    return rangeWithDots;
  }

  return (
    <nav className='flex items-center justify-center gap-1'>
      <Link
        href={getPageUrl(currentPage === 1 ? currentPage : currentPage - 1)}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage <= 1
            ? 'text-zinc-500 cursor-not-allowed bg-zinc-700'
            : 'text-zinc-200 hover:bg-zinc-700 transition-colors border border-zinc-700'
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className='size-5' /> Prev
      </Link>
      {getVisiblePages().map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
            page === currentPage
              ? 'text-zinc-200 bg-zinc-700'
              : 'text-zinc-200 hover:bg-zinc-700 transition-colors border border-zinc-700'
          }`}
        >
          {page}
        </Link>
      ))}
      <Link
        href={getPageUrl(
          currentPage === totalPages ? currentPage : currentPage + 1
        )}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
          currentPage >= totalPages
            ? 'text-zinc-500 cursor-not-allowed bg-zinc-700'
            : 'text-zinc-200 hover:bg-zinc-700 transition-colors border border-zinc-700'
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Next <ChevronRight className='size-5' />
      </Link>
    </nav>
  );
}
