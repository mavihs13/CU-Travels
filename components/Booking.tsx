import Link from "next/link";
import React from "react";

const Booking = () => {
  return (
    <div className="w-screen flex justify-center mx-20 my-12">
        <div>
        <img
              className="rounded-t-lg "
              src="/phones.png"
              alt=""
            />
        </div>
      <div className="w-full max-w-lg mx-auto p-8 my-36">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">Book Your Ticket</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  From
                </label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  placeholder="Starting Place"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  To
                </label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="Want to Reach"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="DD / MM"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  No of Passenger
                </label>
                <input
                  type="number"
                  name="card-holder"
                  id="card-holder"
                  placeholder="No of Passenger"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <Link href="https://rzp.io/l/OsRdlhE">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Procied
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
