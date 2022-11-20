const Filter = ({ search, setSearch, limit, setLimit, ref }) => {
  return (
    <div ref={ref} className="filter container">
      <div className="filter-container">
        <form>
          <input
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
            }}
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
          />
        </form>

        <div className="limit">
          <div
            onClick={(event) => {
              event.preventDefault();
              setLimit(10);
              console.log(limit);
            }}
            className="limit-block"
          >
            10
          </div>
          <div
            onClick={(event) => {
              event.preventDefault();
              setLimit(50);
              console.log(limit);
            }}
            className="limit-block"
          >
            50
          </div>
          <div
            onClick={(event) => {
              event.preventDefault();
              setLimit(100);
              console.log(limit);
            }}
            className="limit-block"
          >
            100
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
