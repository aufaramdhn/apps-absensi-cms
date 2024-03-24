import Layouts from "../components/layouts/Layouts";

const Account = () => {
  const userTable = [
    {
      name: "John Brown",
      age: 45,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Jim Green",
      age: 27,
      address: "London No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 31,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return (
    <>
      <Layouts>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden bg-white border border-gray-700 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-gray-400"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start dark:text-gray-400"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {userTable.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-black whitespace-nowrap">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-black whitespace-nowrap">
                          {user.age}
                        </td>
                        <td className="px-6 py-4 text-sm text-black whitespace-nowrap">
                          {user.address}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Account;
