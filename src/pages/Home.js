import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Comics from "../components/Comics";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Home = ({ search, setSearch, page, setPage, limit, setLimit }) => {
  return (
    <div>
      <Header />
      <Navbar />

      <img
        className="banner-site"
        src="https://i.annihil.us/u/prod/marvel/i/mg/7/03/63730a66c6850.jpg"
        alt=""
      />
      <Filter
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
      />
      <h1 className="container">COMICS</h1>
      <Comics search={search} page={page} limit={limit} setPage={setPage} />
      {/* <Pagination page={page} setPage={setPage} /> */}
      <Footer />
    </div>
  );
};

export default Home;
