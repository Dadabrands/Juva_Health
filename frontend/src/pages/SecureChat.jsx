import { people01, people02, people03 } from "../assets"

const SecureChat = () => {
  return (
  
    <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
      <div className="self-start mt-2 ml-3 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Chat with your doctor
      </div>
      <div className="flex gap-5 justify-between px-8 py-5 mt-5 w-full text-xl text-purple-800 bg-purple-50 rounded-xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7759fc1ce13906d2f5a7ac2fcf48c26fe7544affc1c2b3b0f53c8e3f908988b3?"
            className="w-6 aspect-square fill-black fill-opacity-0"
          />
          <div className="grow max-md:max-w-full">
            responses typically takes less thatn 24 hours
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43834c27b0d5051dd24a66f56742b885e8a1c6a3901400e0496f9712262191b5?"
          className="w-6 aspect-square"
        />
      </div>
      <div className="flex flex-col mt-10 bg-white rounded-3xl shadow max-md:max-w-full">
        <div className="flex gap-5 justify-between px-8 py-6 w-full text-xl bg-white shadow max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="grow justify-center items-center px-16 py-2 whitespace-nowrap bg-purple-50 rounded-3xl text-zinc-400 max-md:px-5">
            Search
          </div>
          <div className="flex gap-5 justify-between my-auto font-medium text-black">
            <div className="flex-auto text-gray-900">
              <span className="font-bold text-gray-900">Dr. Kate Paul</span>{" "}
            </div>
            <div className="flex gap-3 justify-between whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea2e127dad3ba7c56dfe1574bcbdc691e9a35b1e3166e909813831a30fd29f4?"
                className="w-6 aspect-square fill-lime-600"
              />
              <div>Call</div>
            </div>
            <div className="flex gap-4 justify-between whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3751365a295b9b2f9db39c9b909b86ec2653737433b2a7e82428033647470a8b?"
                className="w-6 aspect-square"
              />
              <div>Files</div>
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-12 border-r border-solid border-r-zinc-400 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-8 py-3 w-full bg-fuchsia-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3.5 justify-between">
                    <img
                      loading="lazy"
                      srcSet={people02}
                      className="aspect-square w-[60px]"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-xl font-semibold text-black">
                        Dr. Kate Paul
                      </div>
                      <div className="mt-2.5 text-base font-medium whitespace-nowrap text-stone-500">
                        How are you feeling today?
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center self-start font-medium whitespace-nowrap basis-0">
                    <div className="text-base text-black">10:24</div>
                    <div className="justify-center self-start px-2 py-1.5 mt-2.5 ml-4 text-sm text-white bg-lime-600 rounded-lg aspect-[0.9] max-md:ml-2.5">
                      3
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-between px-8 mt-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3.5 justify-between">
                    <img
                      loading="lazy"
                      srcSet={people01}
                      className="aspect-square w-[60px]"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-xl font-semibold text-black">
                        Dr. Chidi Dickson
                      </div>
                      <div className="mt-2.5 text-base font-medium whitespace-nowrap text-stone-500">
                        How are you feeling today?
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap basis-0">
                    <div>Yesterday</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/939abab7c4090fd3b3184e640d193b2c52d92f889c4ed35c5bcaa1c0b8a6f9e3?"
                      className="self-end mt-2.5 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-8 mt-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3.5 justify-between">
                    <img
                      loading="lazy"
                      srcSet={people03}
                      className="aspect-square w-[60px]"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-xl font-semibold text-black">
                        Dr. Alice George
                      </div>
                      <div className="mt-2.5 text-base font-medium whitespace-nowrap text-stone-500">
                        How are you feeling today?
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap basis-0">
                    <div>Monday</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/939abab7c4090fd3b3184e640d193b2c52d92f889c4ed35c5bcaa1c0b8a6f9e3?"
                      className="self-end mt-2.5 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-1 justify-between px-8 mt-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3.5 justify-between">
                    <img
                      loading="lazy"
                      srcSet={people01}
                      className="aspect-square w-[60px]"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-xl font-semibold text-black">
                        Dr. Peter Nkwe
                      </div>
                      <div className="mt-2.5 text-base font-medium whitespace-nowrap text-stone-500">
                        How are you feeling today?
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap basis-0">
                    <div>Wednesday</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/939abab7c4090fd3b3184e640d193b2c52d92f889c4ed35c5bcaa1c0b8a6f9e3?"
                      className="self-end mt-2.5 w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-1.5 justify-between px-8 mt-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-3.5 justify-between">
                    <img
                      loading="lazy"
                      srcSet={people01}
                      className="aspect-square w-[60px]"
                    />
                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-xl font-semibold text-black">
                        Dr. Lisa Adah
                      </div>
                      <div className="mt-2.5 text-base font-medium whitespace-nowrap text-stone-500">
                        How are you feeling today?
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap basis-0">
                    <div>01/01/2024</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/939abab7c4090fd3b3184e640d193b2c52d92f889c4ed35c5bcaa1c0b8a6f9e3?"
                      className="self-end mt-2.5 w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-20 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 font-medium max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between self-start px-6 pt-5 pb-3 rounded-3xl bg-neutral-200 max-md:px-5">
                    <div className="flex-auto text-xl text-gray-900">
                      Hello, Mr James
                    </div>
                    <div className="self-start mt-3.5 text-base text-neutral-400">
                      9:10am
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between self-end px-6 pt-5 pb-3 mt-8 text-white bg-lime-600 rounded-3xl max-md:px-5">
                    <div className="flex-auto text-xl">Good day, Dr Kate</div>
                    <div className="self-start mt-3.5 text-base">9:10am</div>
                  </div>
                </div>
                <div className="flex flex-col px-8 mt-8 font-medium max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between self-start px-6 pt-5 pb-3 text-base rounded-3xl bg-neutral-200 max-md:px-5">
                    <div className="text-gray-900">
                      How are you feeling <br />
                      today?
                    </div>
                    <div className="self-end mt-7 text-neutral-400">9:10am</div>
                  </div>
                  <div className="flex gap-5 justify-between self-end px-6 pt-5 pb-3 mt-5 text-white bg-lime-600 rounded-3xl max-md:px-5">
                    <div className="text-xl">I”m fine</div>
                    <div className="self-start mt-3.5 text-base">9:10am</div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-8 py-5 mt-14 w-full bg-white shadow max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between my-auto text-xl font-medium text-zinc-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f987613f9d193a71359ad15e2d973522844fd2c62c16c5080a27ade45058d9d4?"
                      className="w-6 aspect-square"
                    />
                    <div className="flex-auto">Write a message...</div>
                  </div>
                  <div className="flex gap-5 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a813ebdc7a7ac40cdd291b2069fcf41ab7f201d99c8037e2b915d6dab4a49de?"
                      className="my-auto w-6 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c194c39bef78c6e8670c7aadbfd1a55dd5134832b2db95cfcfe6c1578b6219f1?"
                      className="w-9 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default SecureChat