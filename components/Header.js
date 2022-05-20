import Avatar from "./Avatar";
import { ViewGridIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
      <div className='flex items-center'> {/* LEFT */}
        <a className="header__link" target='_blank' rel='noreferrer' href='https://pacio.dev'>About Tomato&apos;s CEO</a>
      </div>
      <div className='flex space-x-4 items-center'> {/* RIGHT */}
        <a className="header__link" target='_blank' rel='noreferrer' href='mailto:kontakt@pacio.dev'>Email</a>
        <a className="header__link" target='_blank' rel='noreferrer' href='https://www.google.com/search?q=tomato&sxsrf=ALiCzsZMoxlFAaKHzQbzCi0eZoy_W0TKqw:1653056713395&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj858eRpO73AhXtkIsKHc5aAgcQ_AUoAXoECAIQAw&biw=2087&bih=1043&dpr=0.9'>Images</a>
        <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100' />
        <Avatar url='/tomato.png' />
      </div>
    </header>
  );
}

export default Header;