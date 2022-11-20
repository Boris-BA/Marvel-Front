import { useEffect, useState } from "react";
import axios from "axios";

const A = ({ id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/personnages/${id}`
          `https://site--marvel-back--2qgmjpqnw8yp.code.run/personnages/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
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
                  {data.description ? (
                    <div>{data.description}</div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="right-bot">
                  {data.comics.map((elem, index) => {
                    return (
                      <div key={index} className="single-card-comic">
                        <img
                          className=" single-card-comic-img"
                          src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                          alt=""
                        />
                        <p className="p-single-card">{elem.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default A;
