export default function GallerySearchBar({ onSort, onFilter, imageSrc }) {
  const handlePopularitySort = () => {
    onSort("popularity");
  };

  const handleLatestSort = () => {
    onSort("latest");
  };

  const handleFilter = (filterType) => {
    onFilter(filterType);
  };

  return (
    <div className="gallery-search-bar">
      <form className="form-inline d-flex gap-3">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort...
        </button>
        <ul className="dropdown-menu">
          <li>
            <option value="date">Sort...</option>
          </li>
          <li>
            <option onClick={handlePopularitySort} value="popularity">
              Popularity
            </option>
          </li>
          <li>
            <option onClick={handleLatestSort} value="latest">
              Latest
            </option>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter...
        </button>
        <ul className="dropdown-menu">
          <li>
            <option value="type">Filter...</option>
          </li>
          <li>
            <option onClick={() => handleFilter("logo")} value="logo">
              Logo
            </option>
          </li>
          <li>
            <option
              onClick={() => handleFilter("illustration")}
              value="illustration"
            >
              Illustration
            </option>
          </li>
          <li>
            <option onClick={() => handleFilter("design")} value="design">
              Design
            </option>
          </li>
        </ul>
      </div>
    </div>
  );
}
