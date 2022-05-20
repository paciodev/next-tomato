import { useRouter } from 'next/router'
import Link from 'next/link'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = () => {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0;  

  return (
    <div className='flex max-w-lg justify-between text-red-700 underline'>
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default Pagination;