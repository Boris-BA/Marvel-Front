import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Persos from "../components/Persos";
import Footer from "../components/Footer";
const Characters = ({
  search,
  setSearch,
  page,
  setPage,
  limit,
  setLimit,
  ref,
}) => {
  // console.log(ref);
  return (
    <div>
      <Header />
      <Navbar />

      <img
        className="banner-site"
        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/characters_art_mas_dsk_01.jpg"
        alt=""
      />
      <Filter
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
        ref={ref}
      />
      <h1 className="container">CHARACTERS</h1>
      <Persos search={search} page={page} limit={limit} setPage={setPage} />
      {/* <Pagination page={page} setPage={setPage} ref={ref} /> */}
      <Footer />
    </div>
  );
};

export default Characters;
