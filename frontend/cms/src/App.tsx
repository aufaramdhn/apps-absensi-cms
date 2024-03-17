import { useState } from "react";
import "./index.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`h-screen bg-gray-800 ${open ? "w-[486px]" : "w-[186px]"} `}
      >
        Sidebar
      </div>
      <div className="w-full h-screen bg-gray-200">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 text-white bg-blue-500"
        >
          Toggle Sidebar
        </button>
        {open && <div>Open</div>}
      </div>
    </div>
  );
}

export default App;
