const Pagination = ({ page, setPage, ref }) => {
  console.log(ref);
  return (
    <div className="pagination">
      {page > 0 && (
        <div
          onClick={() => {
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          className="block-pagination"
        >
          Preview
        </div>
      )}
      {page > 0 && <div className="block-pagination">{page}</div>}
      <div
        onClick={() => {
          setPage(page + 1);
          // ref.current.scrollTo({ ref: ref, behavior: "smooth" });
          // ref.current.focus();
          window.scrollTo(0, 0);
        }}
        className="block-pagination"
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
