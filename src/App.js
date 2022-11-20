import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Cookies from "js-cookie";

//Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Perso from "./pages/Perso";
import Favorites from "./pages/Favorites";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(100);
  const [favoris, setFavavoris] = useState([]);
  const ref = useRef();

  // console.log(favoris);
  // console.log(favoris);
  // const cookieId = favoris;
  // const stringifiedTab = JSON.stringify(cookieId); // L'inverse c'est JSON.parse()
  // console.log("stringifiedTab : ", stringifiedTab);
  // Cookies.set("cookieId", stringifiedTab, { expires: 7 });
  // console.log(ref);
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
              />
            }
          ></Route>
          <Route
            path="/characters"
            element={
              <Characters
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                ref={ref}
              />
            }
          ></Route>
          <Route
            path="/perso/:id"
            element={<Perso favoris={favoris} setFavavoris={setFavavoris} />}
          ></Route>
          <Route
            path="/favorites"
            element={
              <Favorites favoris={favoris} setFavavoris={setFavavoris} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
