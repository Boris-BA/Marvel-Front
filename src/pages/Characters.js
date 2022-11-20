import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

import Persos from "../components/Persos";
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
    </div>
  );
};

export default Characters;
