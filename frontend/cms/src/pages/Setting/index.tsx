import { Link, useLocation } from "react-router-dom";
import Layouts from "../../components/layouts/Layouts";

const Setting = ({ children }: any) => {
  const Links = [
    {
      name: "Profile",
      to: "/Setting/Profile",
    },
    {
      name: "Security",
      to: "/Setting/Security",
    },
  ];

  const location = useLocation();

  return (
    <Layouts>
      <h1 className="mb-3 text-3xl font-bold">Setting Account</h1>
      <div className="w-full bg-white rounded-md shadow-lg h-72">
        <div className="flex h-full">
          <div className="flex px-14">
            <div className="flex flex-col items-center w-full pt-10">
              {Links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className={`px-2 py-1 mb-3 text-lg transition duration-300 rounded-md shadow-sm hover:bg-red-500 hover:text-white ${
                    location.pathname === link.to
                      ? "bg-red-500 text-white"
                      : "text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=" bg-slate-200 w-0.5"></div>
          <div className="flex-1 ">{children}</div>
        </div>
      </div>
    </Layouts>
  );
};

export default Setting;
