import React from "react";
import { navIcons, navLinks } from "@Constants";
import dayjs from "dayjs";
import useWindowStore from "@store/windows";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" />
        <p className="font-bold">Gopall's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              className=" cursor-pointer "
              key={id}
              onClick={() => openWindow(type)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
