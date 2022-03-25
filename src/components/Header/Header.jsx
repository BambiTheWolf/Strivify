import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState("Trending");
  return (
    <div className="header__wrap">
      <span
        className={
          selected === "Trending" ? "header__el selected" : "header__el"
        }
        onClick={() => setSelected("Trending")}
      >
        Trending
      </span>
      <span
        className={
          selected === "Podcast" ? "header__el selected" : "header__el"
        }
        onClick={() => setSelected("Podcast")}
      >
        Podcast
      </span>
      <span
        className={
          selected === "Mood and genres" ? "header__el selected" : "header__el"
        }
        onClick={() => setSelected("Mood and genres")}
      >
        Mood and genres
      </span>
      <span
        className={
          selected === "New releases" ? "header__el selected" : "header__el"
        }
        onClick={() => setSelected("New releases")}
      >
        New releases
      </span>
      <span
        className={
          selected === "Discover" ? "header__el selected" : "header__el"
        }
        onClick={() => setSelected("Discover")}
      >
        Discover
      </span>
    </div>
  );
};
export default Header;
