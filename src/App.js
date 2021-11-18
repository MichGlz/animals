import "./App.css";
import Animal from "./components/Animal";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { animalsClean } from "./modules/animals";

function App() {
  const [displayList, setDisplayList] = useState(animalsClean);
  const animalsMap = displayList.map((animal) => <Animal key={animal.id} {...animal} />);

  function sorting() {
    setDisplayList([...animalsClean].sort(sortByName));
  }

  function sortByName(a, b) {
    if (a.animalName > b.animalName) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <>
      <h1>Animals</h1>
      <Filter myFunction={(theFilter) => setDisplayList(theFilter === "*" ? animalsClean : animalsClean.filter((animal) => animal.type === theFilter))} />
      <table id="list">
        <thead>
          <tr>
            <th data-action="sort" data-sort-direction="asc" data-sort="star">
              ⭐
            </th>
            <th data-action="sort" data-sort-direction="asc" data-sort="name" onClick={sorting}>
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
