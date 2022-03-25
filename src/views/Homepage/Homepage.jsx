import "./Homepage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchMusic } from "../../apicalls";
import Header from "../../components/Header/Header";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";

const Homepage = () => {
  const [nanoWar, setNanoWar] = useState([]);
  const [italianSpiderman, setItalianSpiderman] = useState([]);
  const [lofi, setLofi] = useState([]);
  useEffect(() => {
    fetchMusic("Nanowar of Steel").then((res) => setNanoWar(res));
    fetchMusic("Italian Spiderman").then((res) => setItalianSpiderman(res));
    fetchMusic("Lofi").then((res) => setLofi(res));
  }, []);
  return (
    <div className="home__wrap">
      <Header />
      <h2>Nanowar of Steel 💞 </h2>
      <div className="home__line">
        {nanoWar &&
          nanoWar.slice(0, 6).map((song) => (
            <Link to={"album/" + song.album.id} key={song.id}>
              {" "}
              <SingleAlbum src={song.album.cover_medium} />{" "}
            </Link>
          ))}
      </div>
      <h2>Italian Spiderman OST 🕸🍝</h2>
      <div className="home__line">
        {italianSpiderman?.slice(0, 6)?.map((song) => (
          <Link to={"album/" + song.album.id} key={song.id}>
            {" "}
            <SingleAlbum src={song.album.cover_medium} />{" "}
          </Link>
        ))}
      </div>
      <h2>Lo-Fi 🎶</h2>
      <div className="home__line">
        {lofi?.slice(0, 6)?.map((song) => (
          <Link to={"album/" + song.album.id} key={song.id}>
            {" "}
            <SingleAlbum src={song.album.cover_medium} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
