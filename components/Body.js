import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const Body = () => {
  const inputRef = useRef(null)
  const router = useRouter()

  const search = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    
    if (!term) return;
    
    router.push(`/search?term=${term}`);
  }

  return (
    <main>
      <form className="flex flex-col items-center flex-grow w-screen" onSubmit={search}>
        <Image
          src="/tomato.png"
          alt=""
          width={200}
          height={200}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg transition duration-100 max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon onClick={search} className='h-5 mr-3 text-gray-500 cursor-pointer' />
          <input ref={inputRef} type="text" className="outline-none flex-grow" />
          <MicrophoneIcon className='h-5 ml-3 text-gray-500'/>
        </div>
        <button className='bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 mt-5'>Search with Tomato</button>
      </form>
    </main>
  );
}

export default Body;