import Image from "next/image";

const UserForm = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-12 justify-center mr-[4rem] xs:max-md:hidden fixed w-full bg-[white] z-[10] ">
        <div className="flex gap-[5rem] md:max-xl:gap-[2rem] h-[11vh] justify-center items-center bg-[#fff] ">
          <div className="mb-3">
            <Image
              src="/papel-logo-black.png"
              alt="logo"
              width={160}
              height={160}
              className="md:max-xl:w-[130px] xs:max-md:w-[130px]"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center mx-auto pt-[7rem]">
        <p className=" text-3xl">Add Address</p>
      </div>

      <form className="max-w-md mx-auto pt-[1rem] pb-[3rem]">
        <div className="mb-4 ">
          <label htmlFor="name" className="block mb-1 ">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">
            Street Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-1">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-1">
            Postal Code:
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem]"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold py-2 px-4 rounded-[0.5rem]"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default UserForm;
