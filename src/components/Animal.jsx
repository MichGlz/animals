import { useState } from "react";
export default function Animal(props) {
  const localStar = localStorage.getItem(`star${props.id}`);
  const starBoolean = localStar ? JSON.parse(localStar) : false;
  const [star, setStar] = useState(starBoolean);

  function clickStar() {
    setStar((oldStar) => !oldStar);
    localStorage.setItem(`star${props.id}`, !star);
  }

  const style = {
    fontWeight: star ? "normal" : "bold",
  };

  return (
    <tr>
      <td data-field="star" onClick={clickStar} style={style}>
        ⭐
      </td>
      <td data-field="name">{props.animalName}</td>
      <td data-field="type">{props.type}</td>
      <td data-field="desc">{props.desc}</td>
      <td data-field="age">{props.age}</td>
    </tr>
  );
}
