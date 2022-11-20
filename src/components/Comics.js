import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Comics = ({ search, page, limit, setPage }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //   const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(
        `http://localhost:4000/comics?&title=${search}&page=${page}&limit=${limit}`
      );
      try {
        const response = await axios.get(
          // `http://localhost:4000/comics?&title=${search}&page=${page}&limit=${limit}`
          `https://site--marvel-back--2qgmjpqnw8yp.code.run/comics?&title=${search}&page=${page}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.message);
      }
    };
    fetchData();
  }, [search, page, limit]);

  return (
    <>
      {isLoading ? (
        <p className="container">isloading...</p>
      ) : (
        <div className="blue container">
          {data.results.map((elem, index) => {
            return (
              <>
                {elem.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                  <div className="fiche">
                    <img
                      className="fiche-img"
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt=""
                    />
                    <p className="fiche-title">{elem.title}</p>

                    <p className="fiche-p">{elem.description}</p>
                  </div>
                )}
              </>
            );
          })}
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};

export default Comics;
