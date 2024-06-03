import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3 mb-24">
            <div className="w-full lg:hidden px-3">
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 md:w-1/3 px-2 mb-4">
                  <div className="py-6 px-2 text-center bg-gray-50">
                    <a className="font-bold font-heading" href="#">
                      Category
                    </a>
                    <ul className="hidden text-left mt-6">
                      <li className="mb-4">
                        <a href="#">New in</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Activewear</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Hoodies & Sweatshirts</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Jackets</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Multipacks</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Bags</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Sports</a>
                      </li>
                      <li className="mb-4">
                        <a href="#">Gifts</a>
                      </li>
                      <li>
                        <a href="#">Notes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 md:w-1/3 px-2 mb-4">
                  <div className="py-6 px-2 text-center bg-gray-50">
                    <a className="font-bold font-heading" href="#">
                      Colors
                    </a>
                    <div className="mt-6 flex flex-wrap">
                      <button className="mr-4 mb-2 rounded-full border border-blue-300 p-1">
                        <div className="rounded-full bg-blue-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-orange-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-gray-900 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-red-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-green-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-pink-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-yellow-300 w-5 h-5"></div>
                      </button>
                      <button className="mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1">
                        <div className="rounded-full bg-gray-100 w-5 h-5"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 md:w-1/3 px-2 mb-4">
                  <div className="py-6 px-4 text-center bg-gray-50">
                    <a className="font-bold font-heading" href="#">
                      Price
                    </a>
                    <div className="hidden mt-6">
                      <input
                        className="w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer"
                        type="range"
                        min="1"
                        max="100"
                        value="50"
                      />
                      <div className="flex justify-between" />
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $0
                      </span>
                      <span className="inline-block text-lg font-bold font-heading text-blue-300">
                        $289
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
