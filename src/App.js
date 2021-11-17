import "./App.css";
import Animal from "./components/Animal";
import { useState } from "react";
import { animalsClean } from "./modules/animals";

function App() {
  const [displayList, setDisplayList] = useState(animalsClean);

  const animalsMap = displayList.map((animal) => <Animal key={animal.id} {...animal} />);

  function Filter() {
    function filterClick(e) {
      const theFilter = e.currentTarget.dataset.filter;

      setDisplayList(theFilter === "*" ? animalsClean : animalsClean.filter((animal) => animal.type === theFilter));
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

  return (
    <>
      <h1>Animals</h1>
      <Filter />
      <table id="list">
        <thead>
          <tr>
            <th data-action="sort" data-sort-direction="asc" data-sort="star">
              ⭐
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="name">
              Name
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="type">
              Type
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="desc">
              Description
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="age">
              Age
            </th>
          </tr>
        </thead>
        <tbody>{animalsMap}</tbody>
      </table>
    </>
  );
}

export default App;
