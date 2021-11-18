export default function Filter(props) {
  function filterClick(e) {
    const theFilter = e.currentTarget.dataset.filter;

    props.myFunction(theFilter);
  }

  return (
    <p>
      Filter:
      <button className="filter" data-action="filter" data-filter="cat" onClick={filterClick}>
        Only Cats
      </button>
      <button className="filter" data-action="filter" data-filter="dog" onClick={filterClick}>
        Only Dogs
      </button>
      <button className="filter" data-action="filter" data-filter="*" onClick={filterClick}>
        all
      </button>
    </p>
  );
}
