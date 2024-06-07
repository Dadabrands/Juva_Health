import { FaSearch } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";
import { FaMicrophone } from "react-icons/fa6";
import People01 from "../assets/people01.png"
function Header() {
  return ( 
    
<header className='mb-4'>
    <div className="flex gap-5 justify-between w-full whitespace-nowrap max-md:flex-wrap max-md:max-w-full px-10 mt-5">
    <div className="flex gap-5 justify-between self-start p-3 text-xl bg-purple-50 rounded-xl text-zinc-400 max-md:flex-wrap max-md:max-w-full">
      <div className="search_box ml-4 flex items-center">
          <FaSearch className="text-gray-600 ml-2"/>
          <input type="text" placeholder="Search" className="bg-transparent border-gray-400 focus:outline-none focus:border-black px-2 py-1"/>
        </div>
      <FaMicrophone className="text-gray-600 mr-6"/>
    </div>
    <div className="flex gap-5 justify-between text-2xl text-black">
      <div className="flex gap-5 justify-between my-auto">
      <SlLocationPin />
        <div>Lagos</div>
      </div>
      <img
        src={People01}
        className="rounded-full shadow-sm aspect-square w-[60px]"
      />
    </div>
  </div>
  </header>
  )
}

export default Header;

   

