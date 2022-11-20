import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Perso = ({ favoris, setFavavoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="single-card">
          <div className="left">
            <img
              className="single-card-img "
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="right">
            <div className="right-top">
              <div className="single-card-name">{data.name}</div>
              {data.description ? <div>{data.description}</div> : <div></div>}
              <button
                className="btn-fav"
                onClick={() => {
                  const newTab = favoris;
                  if (newTab.indexOf(id) === -1) {
                    newTab.push(id);
                    setFavavoris(newTab);
                    const cookieId = favoris;
                    const stringifiedTab = JSON.stringify(cookieId); // L'inverse c'est JSON.parse()
                    console.log("stringifiedTab : ", stringifiedTab);
                    Cookies.set("cookieId", stringifiedTab, { expires: 7 });
                  } else {
                    console.log("Déjà dans le tableau");
                  }

                  console.log(favoris);
                }}
              >
                Add to Favorites
              </button>
            </div>
            <div className="right-bot">
              {data.comics.map((elem, index) => {
                return (
                  <>
                    {elem.thumbnail.path !==
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                      <div key={index} className="single-card-comic">
                        <img
                          className=" single-card-comic-img"
                          src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                          alt=""
                        />
                        <p className="p-single-card">{elem.title}</p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perso;
