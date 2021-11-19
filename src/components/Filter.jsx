export default function Filter(props) {
  return (
    <p>
      Filter:
      <button className="filter" data-action="filter" data-filter="cat" onClick={props.filterClick}>
        Only Cats
      </button>
      <button className="filter" data-action="filter" data-filter="dog" onClick={props.filterClick}>
        Only Dogs
      </button>
      <button className="filter" data-action="filter" data-filter="*" onClick={props.filterClick}>
        all
      </button>
    </p>
  );
}
