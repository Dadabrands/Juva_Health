

import {logo} from  "../assets";
const Logo = () => {
  return (
<div className="flex gap-2 my-auto pl-10   text-purple-800 whitespace-nowrap">
        <div
          href="/"
          className=" w-9 h-9 text-2xl font-bold font-inter  flex items-center space-x-3 text-gray20"
        >
          <img src={logo} alt="" className="grow self-start mt-1.5" />
          <span className=" text-3xl  font-inter font-bold "> Juva Health </span>
        </div>
       </div>
  )
}

export default Logo


