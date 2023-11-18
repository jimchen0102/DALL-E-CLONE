import React from "react";

const Field = ({
  type,
  name,
  label,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block font-medium text-sm text-gray-900"
        >
          {label}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="px-2 py-1 font-semibold text-xs text-black bg-[#ececf1] rounded-[5px]"
          >
            隨機產生
          </button>
        )}
      </div>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="block w-full p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-[#4649ff] focus:border-[#4649ff]"
      />
    </div>
  );
};

export default Field;
