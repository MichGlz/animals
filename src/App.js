import "./App.css";
import Animal from "./components/Animal";
import Filter from "./components/Filter";
import React, { useState } from "react";
import { animalsClean } from "./modules/animals";

function App() {
  const [upDateAnimalsClean, setUpDateAnimalsClean] = useState(animalsClean);
  const [displayList, setDisplayList] = useState(upDateAnimalsClean);

  function filterClick(e) {
    const theFilter = e.currentTarget.dataset.filter;

    setDisplayList(theFilter === "*" ? upDateAnimalsClean : upDateAnimalsClean.filter((animal) => animal.type === theFilter));
  }

  function changeStatus(index) {
    setUpDateAnimalsClean(function (oldList) {
      const newList = [...oldList];
      newList[index] = { ...oldList[index] };
      newList[index].star = !newList[index].star;
      console.log(newList);
      return newList;
    });
  }

  function sorting(e) {
    let direction = 1;
    if (e.currentTarget.dataset.sortDirection === "asc") {
      e.target.dataset.sortDirection = "desc";
      direction = -1;
    } else {
      e.target.dataset.sortDirection = "asc";
      direction = 1;
    }
    setDisplayList([...displayList].sort(sortByName));

    function sortByName(a, b) {
      if (a.animalName > b.animalName) {
        return 1 * direction;
      } else {
        return -1 * direction;
      }
    }
  }

  const animalsMap = displayList.map((animal) => <Animal key={animal.id} {...animal} changeStatus={changeStatus} />);

  return (
    <>
      <h1>Animals</h1>
      <Filter filterClick={filterClick} />
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
