/* eslint-disable @next/next/no-img-element */
const Avatar = ({ url, className }) => {
  return (
    <img className={`h-10 rounded-full hover:scale-110 transition-transform cursor-pointer ${className ? className : ''}`} loading="lazy" src={url} alt=''/>
  );
}

export default Avatar;