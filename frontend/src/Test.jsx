import { people01, people02 } from "./assets"
import CalendarGfg from "./components/Calender"


const Test = () => {
  return (
    
    <div className="flex flex-col grow px-6 pt-9 pb-4 mx-auto w-full bg-purple-50 rounded-[48px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col justify-center p-6 w-full bg-white rounded-3xl max-md:px-5">
        <div className="flex gap-5 justify-between px-px w-full">
         <CalendarGfg />
        </div>
        
      </div>
      <div className="flex gap-5 justify-between mt-14 max-md:mt-10">
        <div className="flex-auto text-2xl font-bold text-black">
          Appointments
        </div>
        <div className="my-auto text-base text-stone-500">view all</div>
      </div>
      <div className="flex gap-5 justify-between px-5 py-4 mt-9 text-xl font-semibold bg-white rounded-3xl max-md:pl-5">
        <img
          loading="lazy"
          srcSet={people02}
          className="self-start max-w-full aspect-square w-[100px]"
        />
        <div className="flex flex-col flex-1 justify-center">
          <div className="text-black">Dr. Kate Paul</div>
          <div className="mt-2.5 text-base font-medium text-stone-500">
            Gynaecologist
          </div>
          <div className="mt-6 text-purple-800 whitespace-nowrap">
            February 4, 2:00pm
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between p-4 mt-6 text-xl font-semibold bg-white rounded-3xl">
        <img
          loading="lazy"
          srcSet={people01}
          className="self-start max-w-full aspect-square w-[100px]"
        />
        <div className="flex flex-col flex-1 justify-center">
          <div className="text-black">Dr. Chidi Dickson</div>
          <div className="mt-2.5 text-base font-medium text-stone-500">
            General Practitioner
          </div>
          <div className="mt-6 text-purple-800 whitespace-nowrap">
            February 6, 12:00pm
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default Test






    
