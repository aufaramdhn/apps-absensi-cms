// import { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layouts = ({ children }: any) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="w-full h-full px-10 pt-8 bg-gray-200">{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
