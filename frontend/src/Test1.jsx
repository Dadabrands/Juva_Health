import { people01, people02, people03 } from "./assets";


function Test1() {
  return (
    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full pr-6 font-inter">
      <div className="text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">
        Find your doctor
      </div>
      <div className="self-start mt-12 ml-3 text-3xl font-semibold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
        Your health status
      </div>
      <div className="flex gap-4 mt-10 whitespace-nowrap text-stone-500 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center items-center px-11 py-4 text-white bg-purple-800 rounded-3xl max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb66570c1c3aaf50a504e78590db9c110260bf577ec95d2016fa373f7e76f8d7?"
            className="aspect-[1.19] w-[43px]"
          />
          <div className="mt-3 text-base font-semibold leading-5">Pulse</div>
          <div className="self-stretch mt-5 text-xl leading-6">
            <span className="text-3xl font-bold">62</span>{" "}
            <span className="text-base">bpm</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center px-6 py-4 bg-fuchsia-200 rounded-3xl leading-[120%] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a28ee5ace59edc1464121c2242215eeccf279144880a96613189ae55d75ab779?"
            className="w-9 aspect-square"
          />
          <div className="mt-3 text-base font-semibold">Blood Pressure</div>
          <div className="mt-5 text-3xl font-bold">110/80</div>
        </div>
        <div className="flex flex-col flex-1 justify-center px-8 py-4 rounded-3xl bg-neutral-200 leading-[120%] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c284c5b8f0e573cc814d98da8c9a7dc7b6fe9998f842c4252847f06f7414a3d1?"
            className="w-9 aspect-square"
          />
          <div className="mt-3 text-base font-semibold">Temperature</div>
          <div className="mt-5 text-3xl font-bold">37.5C</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto text-2xl font-bold text-black">
          Recent messages
        </div>
        <div className="my-auto text-base text-stone-500">view all</div>
      </div>
      <div className="flex gap-5 justify-between px-px mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3.5 justify-between">
          <img
            loading="lazy"
            srcSet={people03}
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
        <div className="flex flex-col justify-center self-start font-medium whitespace-nowrap">
          <div className="text-base text-black">10:24</div>
          <div className="justify-center self-start px-2 py-1.5 mt-2.5 ml-4 text-sm text-white bg-lime-600 rounded-lg aspect-[0.9] max-md:ml-2.5">
            3
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 justify-between">
          <img
            loading="lazy"
            srcSet={people02}
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
        <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap">
          <div>10:24</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
            className="mt-2.5 ml-5 w-6 aspect-square max-md:ml-2.5"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 justify-between">
          <img
            loading="lazy"
            srcSet={people01}
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
        <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap">
          <div>10:24</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
            className="mt-2.5 ml-5 w-6 aspect-square max-md:ml-2.5"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-px mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 justify-between">
          <img
            loading="lazy"
            srcSet={people03}
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
        <div className="flex flex-col justify-center my-auto text-base font-medium text-black whitespace-nowrap">
          <div>10:24</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7f06268a34e9f329d5ff791088134ae1f7122b1bdf28b870f3afab13c40a87?"
            className="mt-2.5 ml-5 w-6 aspect-square max-md:ml-2.5"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-6 w-full text-black max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 justify-between text-xl font-semibold">
          <img
            loading="lazy"
            srcSet={people02}
            className="aspect-square w-[60px]"
          />
          <div className="grow justify-center self-start py-1 mt-1">
            Dr. Lisa Adah
          </div>
        </div>
        <div className="self-start text-base font-medium">10:24</div>
      </div>
    </div>
  );
}


export default Test1;