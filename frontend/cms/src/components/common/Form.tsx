import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    noHp: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form action="POST" className="mb-3" onSubmit={handleSubmit}>
        <div className="flex flex-col p-4 space-y-4 bg-white border border-gray-700 rounded-lg dark:bg-gray-700 dark:border-gray-600">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-700 dark:text-gray-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-700 rounded-md dark:border-gray-600"
            onChange={handleChange}
            value={formData.name}
          />
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700 dark:text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-700 rounded-md dark:border-gray-600"
            onChange={handleChange}
            value={formData.email}
          />
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700 dark:text-gray-400"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-700 rounded-md dark:border-gray-600"
            onChange={handleChange}
            value={formData.password}
          />
          <label
            htmlFor="noHp"
            className="text-sm font-semibold text-gray-700 dark:text-gray-400"
          >
            No. Telephone
          </label>
          <input
            type="text"
            id="noHp"
            name="noHp"
            className="w-full px-3 py-2 border border-gray-700 rounded-md dark:border-gray-600"
            onChange={handleChange}
            value={formData.noHp}
          />
          <label
            htmlFor="address"
            className="text-sm font-semibold text-gray-700 dark:text-gray-400"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-3 py-2 border border-gray-700 rounded-md dark:border-gray-600"
            onChange={handleChange}
            value={formData.address}
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
