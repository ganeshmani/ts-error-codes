import { useState } from "react";
type Props = {
  codes: string[];
  handleCodeClick: (code: string) => void;
  handleSearch: (value: string) => void;
  selectedCode: string;
};

const Sidebar: React.FC<Props> = ({
  codes,
  handleCodeClick,
  handleSearch,
  selectedCode,
}) => {
  const _handleCodeClick = (code: string) => {
    handleCodeClick(code);
  };

  const _handleOnChange = (e: any) => {
    const { value } = e.target;
    handleSearch(value);
  };

  return (
    <div className="mt-5">
      <div className="p-4">
        <input
          type="number"
          name="code"
          onChange={_handleOnChange}
          id="code"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Search Error Code"
        />
      </div>

      <ul role="list" className="divide-y mt-4 px-1">
        {codes.map((code) => (
          <li
            onClick={() => _handleCodeClick(code)}
            key={code}
            className={`py-3 px-2 cursor-pointer text-center ${
              code === selectedCode ? "border-l-4 border-l-indigo-500" : ""
            }`}
          >
            TS Code:<strong>{code}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
