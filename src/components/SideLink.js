import React from "react";

const SideLink = ({ name, Icon, onMenuItemClick, active }) => {
  const isActive = active === name;
  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl mb-2 pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center group-hover:bg-primary-light  rounded-full pl-3 pr-8 py-3
        ${isActive ? "font-bold" : ""}`}
          >
            <Icon className={`${isActive ? "bg-black" : ""}`} />
            <span className="ml-4 ">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
