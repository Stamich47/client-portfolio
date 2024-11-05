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
      <input type="text" placeholder="Search" />
      <button type="button" className="btn btn-primary">
        Search
      </button>
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

      <div className="modal-example">
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Push for Modal
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img src={imageSrc} alt="modal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
