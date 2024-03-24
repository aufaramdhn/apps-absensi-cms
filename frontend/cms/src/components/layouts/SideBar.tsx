import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const Links = [
    {
      title: "Dashboard",
      icon: "ri-dashboard-line",
      to: "/",
    },
    {
      title: "Attendance",
      icon: "ri-file-list-3-line",
      to: "/Attendance",
    },
    {
      title: "Account",
      icon: "ri-user-line",
      to: "/Account",
    },
    {
      title: "Setting",
      icon: "ri-settings-2-line",
      to: "/Setting/Profile",
    },
  ];

  interface Links {
    title: string;
    icon: string;
    to: string;
  }

  return (
    <div className="flex flex-col transition-all bg-zinc-950 w-80">
      <div className="flex items-center px-4 py-8 text-left text-white">
        <i className="text-3xl ri-id-card-line me-3"></i>
        <h1 className="text-2xl text-white">Attendance</h1>
      </div>
      <div className="flex-1">
        <div className="flex-1">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`flex items-center px-4 py-1 mx-2 my-2 rounded-lg transition duration-300 delay-100 hover:bg-slate-200 hover:text-black ${
                window.location.pathname === link.to
                  ? "bg-slate-200 text-black "
                  : "text-white"
              }`}
            >
              <i className={`text-xl ${link.icon}`}></i>
              <span className="text-lg ms-3">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <hr className="mx-10" />
      <button className="flex items-center justify-center py-2 m-3 text-white transition duration-300 bg-red-600 bg-opacity-50 rounded-lg hover:bg-opacity-100">
        <i className="text-xl ri-logout-box-line me-3"></i>
        <h3 className="text-lg">Logout</h3>
      </button>
    </div>
  );
};

export default SideBar;
