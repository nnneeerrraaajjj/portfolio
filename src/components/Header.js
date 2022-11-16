import {React, useState} from "react";
import { RESUME_PATH } from "../root.link";
import { isMobile } from "../utlis.js/common";
import menu from "../images/menu.svg";

const Header = () => {
  const [showMenu, setMenu] = useState(false)
  return (
    <>
      {isMobile() ? (
        <div
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "16px",
            fontWeight: "700",
            marginBottom: "4px",
            paddingLeft: "10px"
          }}
          onClick={() => setMenu(!showMenu)}
        >
          <img src={menu} alt={"Menu"} style={{ height: "20px", width:"30px"}}/>
        </div>
      ) : (
        <></>
      )}
      {(!isMobile() || (isMobile() && showMenu)) &&
        <nav className="space-x-10">
        <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
          <li>
            <a
              href="#Experience"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              {isMobile() ? "🤓" : "Experience"}
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              {isMobile() ? "👨‍🏫" : "Projects"}
            </a>
          </li>
          <li>
            <a
              href="#Skill"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              {isMobile() ? "🤹‍♂️" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              {isMobile() ? "📞" : "Contact"}
            </a>
          </li>

          <li>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              {isMobile() ? "📄" : "Resume"}
            </a>
          </li>
        </ul>
      </nav>}
    </>
  );
};

export default Header;
