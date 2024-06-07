import Select from "react-select";
import { useState } from "react";

const Payment = () => {


    const [selectedMethod, setSelectedMethod] = useState('creditDebit');
  
    const handleMethodChange = (method) => {
      setSelectedMethod(method);
    };
  
  const options = [
    { value: "Nigeria", label: "Nigeria" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Brazil", label: "Brazil" },
    { value: "India", label: "India" },
    { value: "China", label: "China" },
  ];

  const currency = [
    { value: "NGN", label: "Nigeria Naira (₦)" },
    { value: "USD", label: "US Dollar ($)" },
    { value: "EUR", label: "Euro (€)" },
    { value: "GBP", label: "British Pound (£)" },
    { value: "JPY", label: "Japanese Yen (¥)" },
    { value: "CAD", label: "Canadian Dollar (C$)" },
    { value: "AUD", label: "Australian Dollar (A$)" },
    { value: "CHF", label: "Swiss Franc (CHF)" },
    { value: "CNY", label: "Chinese Yuan (¥)" },
    { value: "HKD", label: "Hong Kong Dollar (HK$)" },
    // Add more options as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
    }),
  };
  return (
    <div className="flex flex-col mt-8 max-md:mt-10 font-inter max-md:max-w-full mb-8">
      <div className="mt-2 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Payment process
      </div>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-0 self-start text-lg rounded-lg border border-solid border-[color:var(--UI-Gray-20,#CFCFD2)]">
                <div className="flex gap-5 justify-between px-2 py-5 text-gray-900 rounded-md">
                
                    <Select
                      options={currency}
                      isMulti
                      placeholder="Select currencies"
                      className="w-full"
                      styles={customStyles}
                    />
              
                </div>
              </div>

              <div className="self-start mt-9 ml-3 text-xl font-semibold text-gray-900 whitespace-nowrap max-md:ml-2.5">
        Payment method
      </div>
      <div className="flex gap-0 pr-10 mt-4 text-lg font-semibold whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div
          className={`grow justify-center py-2.5 pr-11 pl-2.5 text-purple-800 border-b-2 border-solid ${
            selectedMethod === 'creditDebit' ? 'border-b-purple-800' : 'border-transparent'
          } max-md:pr-5`}
          onClick={() => handleMethodChange('creditDebit')}
        >
          Use Credit/Debit
        </div>
        <div
          className={`grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5 ${
            selectedMethod === 'bankTransfer' ? 'bg-purple-50 border-l-stone-300' : ''
          }`}
          onClick={() => handleMethodChange('bankTransfer')}
        >
          Bank Transfer
        </div>
        <div
          className={`grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5 ${
            selectedMethod === 'ussd' ? 'bg-purple-50 border-l-stone-300' : ''
          }`}
          onClick={() => handleMethodChange('ussd')}
        >
          Use USSD
        </div>
      </div>
              {/* <div className="self-start mt-9 ml-3 text-xl font-semibold text-gray-900 whitespace-nowrap max-md:ml-2.5">
                Payment method
              </div>
              <div className="flex gap-0 pr-10 mt-4 text-lg font-semibold whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="grow justify-center py-2.5 pr-11 pl-2.5 text-purple-800 border-b-2 border-solid border-b-purple-800 max-md:pr-5">
                  Use Credit/Debit
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5">
                  Bank Transfer
                </div>
                <div className="grow justify-center items-start py-2.5 pr-16 pl-2.5 bg-purple-50 border-solid border-l-[0.5px] border-l-stone-300 max-md:pr-5">
                  Use USSD
                </div>
              </div> */}

              <div className="self-start mt-12 text-zinc-500 max-md:mt-10">
                Billing country/region
                <Select
                  options={options}
                  isMulti
                  className="mt-2 max-w-[260px]"
                />
              </div>

              <butto className="mt-8 text-xl font-semibold text-gray-900 max-md:max-w-full">
                Credit/Debit Card Info
              </butto>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5"
                  placeholder="Name on card"
                />
                <input
                  type="text"
                  className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5"
                  placeholder="Card number"
                />
              </div>
              <div className="flex gap-5 justify-between mt-4 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-700 max-md:pr-5"
                  placeholder="Expires (MM/YY)"
                />
                <input
                  type="text"
                  className="grow justify-center items-start self-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-500 max-md:pr-5"
                  placeholder="CVV / CVC"
                />
              </div>
              <div className="flex gap-3 self-start py-2.5 mt-4 whitespace-nowrap text-zinc-900 items-center">
                <input
                  type="checkbox"
                  id="saveCard"
                  className="w-6 h-6 rounded border border-solid border-neutral-400"
                />
                <label htmlFor="saveCard" className="grow self-start mt-1">
                  Save my card for future use.
                </label>
              </div>

              <div className="mt-8 text-xl font-semibold text-gray-900 max-md:max-w-full">
                Billing Address
              </div>
              <div className="flex gap-5 justify-between mt-6 whitespace-nowrap text-zinc-700 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5"
                  placeholder="Address 1"
                />
                <input
                  type="text"
                  className="grow justify-center items-start py-2.5 pr-16 pl-2.5 border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] max-md:pr-5"
                  placeholder="Address 2 (optional)"
                />
              </div>
              <div className="justify-center items-start py-2.5 pr-16 pl-2.5 mt-4 max-w-full whitespace-nowrap border-b border-solid border-b-[color:var(--UI-Gray-40,#9F9FA6)] text-zinc-500 w-[300px] max-md:pr-5">
                <input type="text" className="w-full" placeholder="Postcode" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-between items-end self-stretch max-md:mt-10">
              <div className="flex flex-col self-stretch px-6 py-11 w-full bg-purple-50 rounded-3xl max-md:px-5">
                <div className="text-2xl font-bold whitespace-nowrap text-stone-500">
                  Transaction Summary
                </div>
                <div className="flex gap-5 justify-between mt-10 max-md:mt-10">
                  <div className="flex-auto text-lg font-medium text-stone-500">
                    Consultation fee:
                  </div>
                  <div className="text-xl font-bold text-gray-900">₦5,000</div>
                </div>
                <div className="shrink-0 mt-36 h-px bg-neutral-300 max-md:mt-10" />
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                  <div className="self-start mt-2 text-2xl font-semibold text-stone-500">
                    Total
                  </div>
                  <div className="flex-auto text-3xl font-bold text-purple-800">
                    ₦5,000
                  </div>
                </div>
              </div>
              <div className="mt-32 text-2xl text-gray-900 max-md:mt-10">
                Total
              </div>
              <div className="mt-3 text-5xl font-bold text-slate-800 max-md:text-4xl">
                ₦5,000
              </div>
              <button className="justify-center px-4 py-5 mt-6 text-lg font-semibold text-white whitespace-nowrap bg-purple-800 rounded-xl">
                Agree and pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
