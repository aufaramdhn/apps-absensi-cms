import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="w-full px-6 py-4 text-white bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-black bg-gray-100 rounded-md ">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 bg-gray-100 rounded-md w-60 focus:outline-none"
          />
          <i className="text-xl ri-search-line me-3"></i>
        </div>
        <div className="flex items-center text-black">
          <i className="text-2xl ri-dashboard-horizontal-line me-3"></i>
          <i className="text-2xl ri-notification-3-line "></i>
          <div className="w-0.5 h-4 mx-5 bg-black"></div>
          <i className="text-2xl ri-user-3-line"></i>
          <h3 className="mx-3 text-xl">Aufa Ramadhan</h3>
          <button onClick={() => setShow(!show)} className="transition-all">
            <i
              className={`text-2xl  ${
                show ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
              } `}
            ></i>
          </button>
        </div>
        {show && (
          <div className="absolute text-black bg-white rounded shadow-lg right-6 w-60 top-16">
            <ul className="px-6">
              <li className="my-4">apa</li>
              <li className="my-4">apa</li>
              <li className="my-4">apa</li>
              <li className="my-4">apa</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
