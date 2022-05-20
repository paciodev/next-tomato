import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const SearchHeader = ({ term }) => {
  const router = useRouter()
  const inputRef = useRef(null)

  const clearInput = () => {
    inputRef.current.value = 'Clearing...'
    setTimeout(() => {
      inputRef.current.value = ''
    }, 500)
  }

  const search = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    
    if (!term) return;
    
    router.push(`/search?term=${term}`);
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className="flex w-full p-6 items-center ">
        <Image
          src='/tomato.png'
          height={40}
          width={40}
          className='cursor-pointer flex-shrink-0'
          alt=''
          onClick={() => router.push('/')}
        />

        <form onSubmit={search} className='flex border border-gray-200 flex-grow rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
          <input placeholder={term} ref={inputRef} className='flex-grow w-full outline-none' type="text" />
          <XIcon className='h-7 text-gray-500 cursor-pointer transition-transform hover:scale-125 sm:mr-3' onClick={clearInput} />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-red-500 border-l-2 pl-3 border-gray-300' />
          <SearchIcon onClick={search} className='h-6 text-red-500 hidden sm:inline-flex cursor-pointer' />
        </form>
        <Avatar className='ml-auto' url='/tomato.png' />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;