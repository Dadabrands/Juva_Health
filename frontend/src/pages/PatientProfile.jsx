import { people01 } from "../assets";


const PatientProfile = () => {
  
      return (
        <div className="flex flex-col mt-8 max-md:mt-10 max-md:max-w-full">
         
          <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
              Patient Profile Overview
            </div>
            <div className="justify-center px-9 py-4 my-auto text-base font-medium text-purple-800 whitespace-nowrap rounded-xl border border-purple-800 border-solid max-md:px-5">
              Edit Profile
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="grow p-8 w-full bg-white rounded-3xl shadow max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                        <img
                          loading="lazy"
                          srcSet={people01}
                          className="self-center max-w-full aspect-[0.93] w-[121px]"
                        />
                        <div className="mt-3 text-xl font-bold text-gray-900">
                          James Timothy Coker
                        </div>
                        <div className="self-center mt-3 text-lg font-bold text-zinc-500">
                          Banker
                        </div>
                        <div className="self-center mt-3 text-lg font-bold text-gray-900">
                          PD-134-768
                        </div>
                        <div className="flex gap-5 justify-between mt-10">
                          <div className="text-base font-bold text-stone-500">
                            Gender:
                          </div>
                          <div className="text-lg text-black">Male</div>
                        </div>
                        <div className="flex gap-4 justify-between mt-6">
                          <div className="grow text-base font-bold text-stone-500">
                            Date of Birth:
                          </div>
                          <div className="grow text-lg text-black">03/12/1980</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Age:
                          </div>
                          <div className="text-lg text-black">43yrs</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Weight:
                          </div>
                          <div className="text-lg text-black">63kg</div>
                        </div>
                        <div className="flex gap-5 justify-between mt-6">
                          <div className="text-base font-bold text-stone-500">
                            Height:
                          </div>
                          <div className="text-lg text-black">178cm</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col justify-center self-stretch my-auto text-base font-bold text-stone-500 max-md:mt-10">
                        <div>Phone Number</div>
                        <div className="mt-3 text-lg text-black whitespace-nowrap">
                          +234(0) 804 2123 432
                        </div>
                        <div className="mt-6">Home Address</div>
                        <div className="mt-3 text-lg text-black">
                          No 5 Okoji Street,
                          <br />
                          Awka, Anambra State
                        </div>
                        <div className="mt-6">Email Address</div>
                        <div className="mt-3 text-lg text-black">
                          james@gmail.com
                        </div>
                        <div className="mt-6">Registration Date</div>
                        <div className="mt-3 text-lg text-black">05/02/2024</div>
                        <div className="mt-6">Next of Kin</div>
                        <div className="mt-3 text-lg text-black">
                          Mrs. Tonia Coker
                        </div>
                        <div className="mt-6">Next of Kin Phone No</div>
                        <div className="mt-3 text-lg text-black whitespace-nowrap">
                          +234(0) 804 2123 432
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center px-6 py-8 w-full bg-white rounded-3xl shadow max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between">
                    <div className="flex-auto text-xl font-bold text-black">
                      Files / Documents
                    </div>
                    <div className="text-base font-medium text-purple-800">
                      View all
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-6 py-4 mt-8 w-full bg-white rounded-xl shadow max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">Blood tests.pdf</div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        27 kb
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-full bg-white rounded-xl shadow max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">Prescriptions.pdf</div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        9 kb
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-full bg-white rounded-xl shadow max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">X-Ray results.pdf</div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        50 kb
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-6 py-4 mt-5 w-full bg-white rounded-xl shadow max-md:px-5">
                    <div className="flex gap-5 justify-between w-full">
                      <div className="flex gap-2 justify-between text-lg font-medium text-gray-900 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c1a53106fc3a883cdcbda30a0cd743506ef6cb0cc794158bbc7b7108eed6fa?"
                          className="w-8 aspect-square"
                        />
                        <div className="grow my-auto">X-Ray results.pdf</div>
                      </div>
                      <div className="self-start mt-2.5 text-base text-stone-500">
                        50 kb
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center px-16 py-4 mt-8 w-full text-base font-medium text-purple-800 whitespace-nowrap bg-purple-50 rounded-xl max-md:px-5">
                    <div className="flex gap-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/202d4eb0d6fc3a7669aec22b1b2dcfcc5b2561ade55ab23335611b02cf97a443?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow">Add file</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center p-8 w-full bg-white rounded-3xl shadow max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto text-xl font-bold text-black">
                      Appointments
                    </div>
                    <div className="text-base font-medium text-purple-800">
                      View all
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between px-6 py-4 mt-8 font-semibold bg-white rounded-3xl shadow max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f2e2537e1584f838dcecfade69d722c9bb0e67dfc078bb90d49c565a8f46525?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">Dr. Chidi Dickson</div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between px-6 py-4 mt-6 font-semibold bg-white rounded-3xl shadow max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a06eca5722c27020dd5f7dd4f364b120c4eb677407d2f712792e32ac6057aa?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">Dr. Chidi Dickson</div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between px-6 py-4 mt-6 font-semibold bg-white rounded-3xl shadow max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/38a71bfb4b60990a741c3acde2db6c6fa9e47267592f2c5d8c2d47e2fb71ce10?"
                      className="my-auto w-8 aspect-square"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="text-xl text-gray-900">Dr. Chidi Dickson</div>
                      <div className="flex gap-5 justify-between mt-3 text-base text-stone-500">
                        <div className="flex-auto">12th Feb, 2024</div>
                        <div className="flex-auto">12:00pm - 01:00pm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 py-8 w-full bg-white rounded-3xl shadow max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between">
                    <div className="flex-auto text-xl font-bold text-black">
                      Payments
                    </div>
                    <div className="text-base font-medium text-purple-800">
                      View all
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-8 whitespace-nowrap text-stone-500">
                    <div className="flex-auto text-xl font-bold">Transaction</div>
                    <div className="text-base font-medium">Amount</div>
                  </div>
                  <div className="flex gap-5 justify-between py-4 mt-5 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between font-bold">
                      <div className="my-auto w-4 h-4 rounded-full" />
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="text-xl text-gray-900">Consultaion fee</div>
                        <div className="mt-2.5 text-base text-stone-500">
                          16/01/2024
                        </div>
                      </div>
                    </div>
                    <div className="my-auto text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between py-4 mt-2 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between font-bold">
                      <div className="my-auto w-4 h-4 rounded-full" />
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="text-xl text-gray-900">Consultaion fee</div>
                        <div className="mt-2.5 text-base text-stone-500">
                          16/01/2024
                        </div>
                      </div>
                    </div>
                    <div className="my-auto text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between pt-4 mt-2 border-b border-solid border-b-zinc-500 border-b-opacity-40">
                    <div className="flex gap-4 justify-between text-xl font-bold text-gray-900">
                      <div className="self-start mt-5 w-4 rounded-full h-[5px]" />
                      <div className="grow justify-center">Consultaion fee</div>
                    </div>
                    <div className="self-start mt-4 text-base font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ </span>
                      <span className="text-purple-800">5,000</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-5 text-xl">
                    <div className="flex-auto font-bold text-stone-500">Total</div>
                    <div className="font-medium text-purple-800">
                      <span className="font-bold text-purple-800">₦ 1</span>5,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    
  

export default PatientProfile