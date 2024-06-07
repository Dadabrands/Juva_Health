
const EditPatientProfile = () => {

  return (
    <div className="flex flex-col mt-8 font-medium max-md:mt-10 max-md:max-w-full">
      <div className="self-start mt-9 ml-3 text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
        Create your profile
      </div>
      <div className="self-start mt-6 ml-3 text-xl text-gray-900 max-md:max-w-full">
        Please fill in the form below with the accurate information
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3301dad3b90f58ff44fed3a95d4efdafca28b88ddf0488f58efa533b2e776196?"
        className="self-center mt-10 max-w-full aspect-[1.11] w-[178px]"
      />
      <div className="self-center mt-4 text-xl text-purple-800 underline whitespace-nowrap">
        Upload your image
      </div>
      <div className="mt-12 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Enter your Personal Details
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Name:
      </div>
      <div className="flex gap-5 justify-between py-2 pr-20 mt-7 text-xl border-b border-solid border-b-zinc-500 text-zinc-400 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex-auto">First Name:</div>
        <div className="flex-auto">Middle Name:</div>
        <div className="flex-auto">Last Name:</div>
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Email Address:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your current address:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Phone Number:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your phone number:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Address:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your current address:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Date of Birth:
      </div>
      <div className="flex gap-5 justify-between px-3 py-2 mt-7 text-xl border-b border-solid border-b-zinc-500 text-zinc-400 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto">Enter your date of birth:</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25fadeb9139567586a1d2f10b0733f26859a1db8b09152aaec447fe9050f596f?"
          className="w-6 aspect-square fill-black fill-opacity-0"
        />
      </div>
      <div className="self-start mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Choose your gender:
      </div>
      <div className="flex gap-5 justify-between mt-7 max-w-full text-xl text-center text-gray-900 whitespace-nowrap w-[429px] max-md:flex-wrap">
        <div className="flex gap-4 justify-between">
          <div className="my-auto w-6 h-6 rounded-full stroke-[1px]" />
          <div>Male</div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="my-auto w-6 h-6 rounded-full stroke-[1px]" />
          <div>Female</div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="my-auto w-6 h-6 rounded-full stroke-[1px]" />
          <div>Other</div>
        </div>
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Profession:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your profession:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Genotype:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your genotype:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Blood Group:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your blood group:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Next of Kin:{" "}
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter name of your next of kin number:
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter Address of Next of Kin:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter address: of next of kin
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter y<span className="">our Relationship with your Next of Kin:</span>
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter y<span className="">our relationship with your next of kin:</span>
      </div>
      <div className="mt-12 text-3xl font-bold text-zinc-500 max-md:mt-10 max-md:max-w-full">
        <span className="text-2xl">Enter your Insurance Policy Details</span>{" "}
        <span className="text-2xl text-zinc-500">
          (if you are subscribed to any)
        </span>
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Select your Insurance Company:
      </div>
      <div className="flex flex-col justify-center px-3 py-2 mt-7 text-xl border-b border-solid border-b-zinc-500 text-zinc-400 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">Select your insurance company</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc11042c76573e6ebb2a1a8a08efa0bf51a756f6bf40cde58375ed68fd1e661?"
            className="w-6 aspect-square"
          />
        </div>
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Customer Reference Number:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your customer reference number
      </div>
      <div className="mt-12 text-xl text-stone-500 max-md:mt-10 max-md:max-w-full">
        Enter your Policy ID:
      </div>
      <div className="justify-center items-start py-2 pr-16 pl-3 mt-7 text-xl whitespace-nowrap border-b border-solid border-b-zinc-500 text-zinc-400 max-md:pr-5 max-md:max-w-full">
        Enter your customer policy ID
      </div>
      <div className="justify-center items-center self-center px-16 py-5 mt-24 max-w-full text-lg font-semibold tracking-tighter leading-7 text-white whitespace-nowrap bg-purple-800 rounded-lg w-[500px] max-md:px-5 max-md:mt-10">
        Submit
      </div>
    </div>
  );
}


export default EditPatientProfile