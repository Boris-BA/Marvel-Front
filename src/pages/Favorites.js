import Header from "../components/Header";
import Navbar from "../components/Navbar";
import A from "../components/A";
import Cookies from "js-cookie";

const Favorites = ({ favoris, setFavavoris }) => {
  // console.log(favoris);
  // const table = ["5fcf91f4d8a2480017b91454", "5fcf91f4d8a2480017b91453"];
  // console.log(Cookies.get("cookieId"));
  const cookie = Cookies.get("cookieId");
  console.log(cookie);

  const deStringifiedTab = JSON.parse(
    cookie ? cookie : '{"result":true, "count":42}'
  );
  console.log(deStringifiedTab);

  return (
    <div>
      <Header />
      <Navbar />
      {cookie !== undefined ? (
        <div>
          {deStringifiedTab.map((elem, index) => {
            return (
              <div>
                <A id={elem} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1 className="container">Vous n'avez pas de Favoris</h1>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Favorites;
