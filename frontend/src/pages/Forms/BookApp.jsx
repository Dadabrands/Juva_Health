// const BookApp = () => {
//   return (

//     <div className="flex flex-col mt-8 max-w-[800px] max-md:mt-10 max-md:max-w-[800px]">
//       <div className="mt-12 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//         Booking an Appointment
//       </div>
//       <div className="mt-10 text-xl text-black max-md:max-w-full">
//         Please fill in the form with the accurate information. It is necessary
//         that you fill every field with the right information.
//       </div>
//       <div className="flex gap-0 justify-between mt-16 text-xl font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div className="grow justify-center items-center px-16 pt-6 pb-3 text-purple-800 bg-white border-b-4 border-solid border-b-purple-800 max-md:px-5 max-md:max-w-full">
//           Booking for Self
//         </div>
//         <div className="grow justify-center items-center px-16 pt-6 pb-3 text-gray-900 bg-purple-50 max-md:px-5 max-md:max-w-full">
//           Booking for Someone else
//         </div>
//       </div>
//       <div className="mt-16 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
//         Select a your preferred doctor
//       </div>
//       <div className="flex gap-5 justify-between py-5 pr-20 pl-7 mt-7 text-xl font-medium border-b border-solid border-b-zinc-500 text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//         <div className="flex-auto">Select a your doctor</div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc11042c76573e6ebb2a1a8a08efa0bf51a756f6bf40cde58375ed68fd1e661?"
//           className="w-6 aspect-square"
//         />
//       </div>
//       <div className="mt-12 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
//         Pick preferred time and date
//       </div>
//       <div className="flex gap-5 justify-between mt-7 text-xl font-medium text-zinc-400 max-md:flex-wrap max-md:max-w-full">
//         <div className="flex gap-5 justify-between py-5 pr-20 pl-7 border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//           <div className="flex-auto">Choose date:</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fadeb9139567586a1d2f10b0733f26859a1db8b09152aaec447fe9050f596f?"
//             className="w-6 aspect-square fill-black fill-opacity-0"
//           />
//         </div>
//         <div className="flex gap-5 justify-between py-5 pr-20 pl-7 border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//           <div className="flex-auto">Choose time:</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/53203ba9cc82ef8189437174e05286284ed1a27cc339d7b6a0cc36150d8b9f22?"
//             className="w-6 aspect-square fill-black fill-opacity-0"
//           />
//         </div>
//       </div>
//       <div className="mt-12 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
//         Select method of consultation
//       </div>
//       <div className="flex gap-5 justify-between pr-20 mt-7 text-xl font-medium max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
//         <div className="flex gap-4 justify-between px-9 py-5 text-purple-800 whitespace-nowrap bg-purple-50 rounded-xl max-md:px-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/7029c0dda6221807914cf71c7f084836713824f12f4eb318ec2503be6c0577dc?"
//             className="w-6 aspect-square"
//           />
//           <div className="grow">Message Chat</div>
//         </div>
//         <div className="flex gap-4 justify-between px-14 py-5 text-lime-600 rounded-xl bg-neutral-200 max-md:px-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb77e4111727de9a20d67959644bc63a6d4c1c3955d834395d7b1f6db908033?"
//             className="w-6 aspect-square fill-black fill-opacity-0"
//           />
//           <div>Audio Call</div>
//         </div>
//         <div className="flex gap-4 justify-between px-14 py-5 text-blue-600 bg-sky-100 rounded-xl max-md:px-5">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/115108399070768090d6e859aabf3fb1e6a0531bf6bdf8c5ed319a2eb42dbb10?"
//             className="w-6 aspect-square fill-black fill-opacity-0"
//           />
//           <div>Video Call</div>
//         </div>
//       </div>

// <div className="flex flex-col pt-2.5 text-xl font-medium max-w-[800px]">

//   <div className="self-start mt-12 ml-2.5 text-stone-500 max-md:mt-10">
//     Select available time
//   </div>
//   <div className="flex gap-5 justify-between pr-11 mt-9 text-gray-900 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
//     <div className="grow justify-center px-5 py-5 bg-purple-50 rounded-xl">
//       09:30am - 10:00am
//     </div>
//     <div className="grow justify-center px-5 py-5 rounded-xl bg-neutral-200 max-md:px-5">
//       10:30am - 11:00am
//     </div>
//     <div className="grow justify-center px-6 py-5 bg-sky-100 rounded-xl max-md:px-5">
//       11:30am - 12:00am
//     </div>
//   </div>
//   <div className="flex gap-5 justify-between pr-11 mt-6 text-gray-900 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
//     <div className="grow justify-center px-4 py-5 bg-sky-100 rounded-xl">
//       02:00am - 02:30am
//     </div>
//     <div className="grow justify-center px-4 py-5 bg-purple-50 rounded-xl">
//       03:00am - 03:30am
//     </div>
//     <div className="grow justify-center px-4 py-5 rounded-xl bg-neutral-200">
//       04:00am - 04:30am
//     </div>
//   </div>
//   <div className="justify-center self-start px-4 py-5 mt-6 text-gray-900 bg-purple-50 rounded-xl">
//     05:00am - 05:30am
//   </div>
//   <div className="mt-12 w-full text-stone-500 max-md:mt-10 max-md:max-w-full">
//     State your reason for the appointment:
//   </div>
//   <div className="items-start pt-5 pr-16 pb-24 pl-6 mt-7 w-full whitespace-nowrap rounded-xl border border-solid border-zinc-500 text-zinc-400 max-md:px-5 max-md:pb-10 max-md:max-w-full">
//     Write brief reason:
//   </div>
//   <div className="mt-12 w-full text-zinc-400 max-md:mt-10 max-md:max-w-full">
//     Current Medication <span className="text-zinc-400">(optional)</span>
//   </div>
//   <div className="justify-center items-start py-5 pr-16 pl-6 mt-7 w-full whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:px-5 max-md:max-w-full">
//     Write you current medication
//   </div>
//   <div className="mt-12 w-full text-zinc-400 max-md:mt-10 max-md:max-w-full">
//     Upload files{" "}
//     <span className="text-zinc-400">(eg. lab test result)</span>
//   </div>
//   <div className="flex gap-5 justify-between px-4 py-2 mt-7 w-full border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
//     <div className="flex-auto my-auto text-zinc-400">
//       Write brief description
//     </div>
//     <div className="flex gap-4 justify-between p-3 text-purple-800 bg-white rounded-lg border border-purple-800 border-solid">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1524d1c7ee6688bebc07b42abe88db49939ee95d415e52a42b199a6afbbed45?"
//         className="w-6 aspect-square"
//       />
//       <div>Add file</div>
//     </div>
//   </div>
//   <div className="justify-center items-center self-center px-16 py-5 mt-24 max-w-full text-lg font-semibold tracking-tighter leading-7 text-white whitespace-nowrap bg-purple-800 rounded-lg w-[500px] max-md:px-5 max-md:mt-10">
//     Book Appointment
//   </div>
// </div>
//     </div>

//   );
// }

// export default BookApp
import { useState } from "react";
import { BsChatDots, BsPhone, BsCameraVideo } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

const BookApp = () => {
  const [bookingType, setBookingType] = useState("self");
  const [doctor, setDoctor] = useState("");
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');
  // const [reason, setReason] = useState('');
  // const [medication, setMedication] = useState('');
  // const [description, setDescription] = useState('');
  // const [file, setFile] = useState(null);

  // const handleSubmit = () => {
  //   // Add your form submission logic here
  // };

  return (
    <div className="flex flex-col font-inter mt-8 max-w-[800px] max-md:mt-10 max-md:max-w-[800px]">
      <div className="mt-12 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Booking an Appointment
      </div>
      <div className="mt-10 text-xl text-black max-md:max-w-full">
        Please fill in the form with the accurate information. It is necessary
        that you fill every field with the right information.
      </div>

      <div className="flex gap-0 justify-between mt-16 text-xl font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div
          className={`grow justify-center items-center px-16 pt-6 pb-3 text-purple-800 bg-white border-b-4 border-solid ${
            bookingType === "self" ? "border-b-purple-800" : ""
          } max-md:px-5 max-md:max-w-full`}
          onClick={() => setBookingType("self")}
        >
          Booking for Self
        </div>
        <div
          className={`grow justify-center items-center px-16 pt-6 pb-3 text-gray-900 bg-purple-50 border-b-4 border-solid ${
            bookingType === "someone_else" ? "border-b-purple-800" : ""
          } max-md:px-5 max-md:max-w-full`}
          onClick={() => setBookingType("someone_else")}
        >
          Booking for Someone else
        </div>
      </div>

      <div className="mt-16 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
        {bookingType === "self"
          ? "Select your preferred doctor"
          : "Select the preferred doctor"}
      </div>
      <div className="flex gap-5 justify-between py-5 pr-20 pl-7 mt-7 text-xl font-medium border-b border-solid border-b-zinc-500 text-zinc-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <select
          className="flex-auto"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          disabled={bookingType === "someone_else"}
        >
          <option value="">Select a doctor</option>
          <option value="Dr. John Doe">Dr. John Doe</option>

          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
          <option value="Dr. Jane Smith">Dr. Josh Dada</option>
          <option value="Dr. Jane Smith">Dr. Chidinma Smith</option>
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc11042c76573e6ebb2a1a8a08efa0bf51a756f6bf40cde58375ed68fd1e661?"
          className="w-6 aspect-square"
          alt=""
        />
      </div>

      <div className="mt-12 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
        Pick preferred time and date
      </div>
      <div className="flex gap-5 justify-between mt-7 text-xl font-medium text-zinc-400 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto justify-between py-5 pr-20 pl-7 border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex-auto">Choose date:</div>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="flex flex-auto justify-between py-5 pr-20 pl-7 border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex-auto">Choose time:</div>
          <input
            type="time"
            className="w-full border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
      </div>

      <div className="mt-12 text-xl font-medium text-stone-500 max-md:mt-10 max-md:max-w-full">
        Select method of consultation
      </div>
      <div className="flex gap-5 justify-between pr-20 mt-7 text-xl font-medium max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <button className="flex gap-4 justify-between items-center px-9 py-5 text-purple-800 whitespace-nowrap bg-purple-50 rounded-xl max-md:px-5 cursor-pointer">
          <BsChatDots className="w-6 h-6" />
          <div className="grow">Message Chat</div>
        </button>
        <button className="flex gap-4 justify-between items-center px-14 py-5 text-lime-600 rounded-xl bg-neutral-200 max-md:px-5 cursor-pointer">
          <BsPhone className="w-6 h-6" />
          <div>Audio Call</div>
        </button>
        <button className="flex gap-4 justify-between items-center px-14 py-5 text-blue-600 bg-sky-100 rounded-xl max-md:px-5 cursor-pointer">
          <BsCameraVideo className="w-6 h-6" />
          <div>Video Call</div>
        </button>
      </div>

      <div className="flex flex-col pt-2.5 text-xl font-medium max-w-[800px]">
        <div className="self-start mt-12 ml-2.5 text-stone-500 max-md:mt-10">
          Select available time
        </div>
        <div className="flex gap-5 justify-between pr-11 mt-9 text-gray-900 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <button className="grow justify-center px-5 py-5 bg-purple-50 rounded-xl cursor-pointer">
            09:30am - 10:00am
          </button>
          <button className="grow justify-center px-5 py-5 rounded-xl bg-neutral-200 cursor-pointer">
            10:30am - 11:00am
          </button>
          <button className="grow justify-center px-6 py-5 bg-sky-100 rounded-xl cursor-pointer">
            11:30am - 12:00am
          </button>
        </div>
        <div className="flex gap-5 justify-between pr-11 mt-6 text-gray-900 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <button className="grow justify-center px-4 py-5 bg-sky-100 rounded-xl cursor-pointer">
            02:00am - 02:30am
          </button>
          <button className="grow justify-center px-4 py-5 bg-purple-50 rounded-xl cursor-pointer">
            03:00am - 03:30am
          </button>
          <button className="grow justify-center px-4 py-5 rounded-xl bg-neutral-200 cursor-pointer">
            04:00am - 04:30am
          </button>
        </div>
        <div className="justify-center self-start px-4 py-5 mt-6 text-gray-900 bg-purple-50 rounded-xl cursor-pointer">
          05:00am - 05:30am
        </div>

        <div className="mt-12 w-full text-stone-500 max-md:mt-10 max-md:max-w-full">
          State your reason for the appointment:
        </div>
        <textarea
          className="items-start pt-5 pr-16 pb-24 pl-6 mt-7 w-full whitespace-nowrap rounded-xl border border-solid border-zinc-500 text-zinc-400 max-md:px-5 max-md:pb-10 max-md:max-w-full"
          placeholder="Write brief reason"
        />
        <div className="mt-12 w-full text-zinc-400 max-md:mt-10 max-md:max-w-full">
          Current Medication <span className="text-zinc-400">(optional)</span>
        </div>
        <textarea
          className="justify-center items-start py-5 pr-16 pl-6 mt-7 w-full whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:px-5 max-md:max-w-full"
          placeholder="Write your current medication"
        />
        <div className="mt-12 w-full text-zinc-400 max-md:mt-10 max-md:max-w-full">
          Upload files{" "}
          <span className="text-zinc-400">(eg. lab test result)</span>
        </div>
        <div className="flex gap-5 justify-between px-4 py-2 mt-7 w-full border-b border-solid border-b-zinc-500 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <input
            type="text"
            className="flex-auto my-auto text-zinc-400 w-full"
            placeholder="Write brief description"
          />

          <button className="flex items-center justify-center gap-2 p-3 text-purple-800 bg-white rounded-lg border border-purple-800 border-solid">
            <FiUpload className="w-6 h-6" />
            <div>Add file</div>
          </button>
        </div>
        <button
          className="justify-center items-center self-center px-16 py-5 mt-24 max-w-full text-lg font-semibold tracking-tighter leading-7 text-white whitespace-nowrap bg-purple-800 rounded-lg w-[500px] max-md:px-5 max-md:mt-10"
          type="submit"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default BookApp;
