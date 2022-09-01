import React from "react";
import { DiAndroid } from "react-icons/di";
import Artiste from "./Artiste";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context";

const PresentationBanner = () => {
  const { getData, loading, setLoading } = useContext(UserContext);

  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const data = getData.getMyTopArtists({ limit: 4 });
    data
      .then((data) => setTopArtists(data.items))
      .then(() => setLoading(false));
  }, []);

  console.log(loading);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="presentation-banner">
      <div className="banner">
        <div className="banner-content">
          <h2>Naledi</h2>
          <p>Enjoy songs from your favorite artists all over the world </p>
          <button>
            <span>
              <DiAndroid />
            </span>
            Download
          </button>
        </div>
      </div>
      <div className="artists">
        {topArtists.map((artist) => {
          return (
            <Artiste
              id={artist.id}
              key={artist.id}
              name={artist.name}
              image={artist.images[0].url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PresentationBanner;
