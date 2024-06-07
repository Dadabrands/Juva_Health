const Plans = () => {
  return (
    //  <section className="flex ">
    //     <div className="flex flex-col grow items-stretch px-11 py-8 mx-auto max-w-360px bg-fuchsia-200 rounded-lg text-zinc-800 max-md:px-5 max-md:mt-10 mt-40" style={{ width: '100%', maxWidth: '360px', height: 'auto', borderRadius: "12px" }}>
    //       <div className="text-2xl tracking-tighter leading-6 text-black">
    //         Basic Plan
    //       </div>
    //       <div className="flex gap-3 items-stretch self-start mt-6 font-medium text-black whitespace-nowrap">
    //         <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
    //           #15,000
    //         </div>
    //         <div className="my-auto text-sm leading-5 uppercase">
    //           Per
    //           <br />
    //           Month
    //         </div>
    //       </div>
    //       <div className="mt-6 text-base tracking-tighter leading-6 text-black">
    //         For this plan you would have access
    //         <br />
    //         all our services and these:
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 1 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
    //         Buy this plan
    //       </div>
    //     </div>

    //     <div className="flex flex-col grow items-stretch px-11 py-8 mx-auto max-w-360px bg-fuchsia-200 rounded-lg text-zinc-800 max-md:px-0 max-md:mt-10 mt-40"  style={{ width: '100%', maxWidth: '360px', height: 'auto', maxHeight: "521px", borderRadius: "12px" }}>
    //       <div className="text-2xl tracking-tighter leading-6 text-black">
    //         Basic Plan
    //       </div>
    //       <div className="flex gap-3 items-stretch self-start mt-6 font-medium text-black whitespace-nowrap">
    //         <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
    //           #15,000
    //         </div>
    //         <div className="my-auto text-sm leading-5 uppercase">
    //           Per
    //           <br />
    //           Month
    //         </div>
    //       </div>
    //       <div className="mt-6 text-base tracking-tighter leading-6 text-black">
    //         For this plan you would have access
    //         <br />
    //         all our services and these:
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 1 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
    //           className="object-center w-6 aspect-square"
    //         />
    //         <div className="flex-auto">Benefit 2 and Impact 1</div>
    //       </div>
    //       <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
    //         Buy this plan
    //       </div>
    //     </div>

    // </section>
    <section className="flex flex-wrap justify-center mb-4 ">
      <div
        className={`flex flex-col p-4 md:p-8 bg-secondary rounded-md mx-4 my-4 md:my-8`}
        style={{
          width: "100%",
          maxWidth: "360px",
          height: "auto",
          borderRadius: "12px",
        }}
      >
        <div className="text-2xl tracking-tighter leading-6 text-black">
         Basic Plan
       </div>
       <div className="flex gap-3 items-stretch self-start mt-6 font-medium text-black whitespace-nowrap">
         <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
           #15,000
         </div>
         <div className="my-auto text-sm leading-5 uppercase">
           Per
           <br />
           Month
         </div>
       </div>
       <div className="mt-6 text-base tracking-tighter leading-6 text-black">
         For this plan you would have access
         <br />
         all our services and these:
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
         className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 1 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
           className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 2 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
           className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 2 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
          className="object-center w-6 aspect-square"
        />         <div className="flex-auto">Benefit 2 and Impact 1</div>       </div>
      <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
          className="object-center w-6 aspect-square"
       />
        <div className="flex-auto">Benefit 2 and Impact 1</div>
      </div>  
           <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
        Buy this plan
      </div>
      </div>
      <div
        className={`flex flex-col p-4 md:p-8 rounded-md mx-4 my-4 md:my-8`}
        style={{
          width: "100%",
          maxWidth: "360px",
          height: "auto",
          borderRadius: "12px",
          backgroundColor: "#E5F2FF"
        }}
      >
        <div className="text-2xl tracking-tighter leading-6 text-black">
         Pro Plan
       </div>
       <div className="flex gap-3 items-stretch self-start mt-6 font-medium text-black whitespace-nowrap">
         <div className="grow text-5xl tracking-tighter leading-10 max-md:text-4xl">
           #25,000
         </div>
         <div className="my-auto text-sm leading-5 uppercase">
           Per
           <br />
           Month
         </div>
       </div>
       <div className="mt-6 text-base tracking-tighter leading-6 text-black">
         For this plan you would have access
         <br />
         all our services and these:
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-2 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
         className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 1 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
           className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 2 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
           className="object-center w-6 aspect-square"
         />
         <div className="flex-auto">Benefit 2 and Impact 1</div>
       </div>
       <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
         <img
           loading="lazy"
           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
          className="object-center w-6 aspect-square"
        />         <div className="flex-auto">Benefit 2 and Impact 1</div>       </div>
      <div className="flex gap-2 justify-between items-stretch mt-4 text-base tracking-tighter leading-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5397f6f5e9f383b1aee500fe513875e8d6134abc7ad7acec276a5a6214b961?"
          className="object-center w-6 aspect-square"
       />
        <div className="flex-auto">Benefit 2 and Impact 1</div>
      </div>  
           <div className="justify-center items-center px-16 py-5 mt-8 text-base font-semibold tracking-tighter leading-6 text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5">
        Buy this plan
      </div>
      </div>
      
    </section>
  );
};

export default Plans;
