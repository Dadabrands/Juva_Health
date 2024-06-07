

const Getstarted = () => {
  return (
   
        <div className="flex flex-col px-16 py-12 bg-white max-md:px-5">
          <div className="flex gap-5 justify-between px-8 py-3.5 mt-5 w-full capitalize bg-fuchsia-200 rounded max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-2 my-auto text-2xl font-bold text-purple-800 whitespace-nowrap">
              <div className="w-9 h-9 bg-purple-800 rounded" />
              <div className="grow self-start mt-1.5">JUVA</div>
            </div>
            <div className="flex gap-5 justify-between items-center px-5 text-xl font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
              <div className="self-stretch my-auto">FAQs</div>
              <div className="flex-auto self-stretch my-auto">Our Services</div>
              <div className="self-stretch my-auto">Blog</div>
              <div className="flex-auto self-stretch my-auto">Health Plan</div>
              <div className="self-stretch my-auto">About Us</div>
              <div className="grow justify-center self-stretch px-6 py-4 text-fuchsia-200 whitespace-nowrap bg-purple-800 rounded max-md:px-5">
                Login/Sign Up
              </div>
            </div>
          </div>
          <div className="mt-16 bg-white rounded-2xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center py-11 pr-3 pl-7 w-full bg-white rounded-2xl border-r border-solid border-r-zinc-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <div className="shrink-0 bg-fuchsia-200 rounded-lg h-[620px] max-md:max-w-full" />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-bold tracking-tighter leading-10 text-black max-md:max-w-full">
                    Get Started
                  </div>
                  <div className="justify-center items-start py-4 pr-16 pl-6 mt-10 text-xl rounded bg-stone-50 text-stone-500 max-md:px-5 max-md:max-w-full">
                    Email or Phone Number
                  </div>
                  <div className="flex gap-5 justify-between py-3.5 pr-20 pl-7 mt-4 text-xl whitespace-nowrap rounded bg-stone-50 text-stone-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="my-auto">Password</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb0578c5d7d3902d39801ee5fa9771f926d242ab6f20a80696fb95a9da168937?"
                      className="w-7 aspect-square"
                    />
                  </div>
                  <div className="justify-center items-center px-16 py-5 mt-7 text-base font-semibold text-white bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full">
                    Sign Up
                  </div>
                  <div className="justify-center items-center px-16 py-5 mt-3.5 text-lg font-medium tracking-tight text-center text-purple-800 bg-fuchsia-200 rounded-lg max-md:px-5 max-md:max-w-full">
                    <span className="text-base tracking-tight leading-5 text-black ">
                      Already have an account?{" "}
                    </span>
                    <span className="text-base font-semibold tracking-tight leading-5 text-purple-800">
                      Login
                    </span>
                  </div>
                  <div className="shrink-0 mt-3 h-px bg-zinc-400 max-md:max-w-full" />
                  <div className="flex justify-center items-center px-16 py-4 mt-7 text-base font-medium whitespace-nowrap rounded-lg border border-solid border-[color:var(--darks-lights-black,#252525)] text-neutral-800 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3478e463f7b387da00ccfe9a618e9a616b9307d5cf50218ea8cf9172407835a?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow">Sign up with Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
  )
}

export default Getstarted