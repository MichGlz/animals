import React from "react";
export default function Animal(props) {
  //const localStar = localStorage.getItem(`star${props.id}`);
  //const starBoolean = localStar ? JSON.parse(localStar) : false;
  //const [star, setStar] = useState(false);

  function clickStar(e) {
    //setStar((oldStar) => !oldStar);
    // localStorage.setItem(`star${props.id}`, !star);
    const animalID = e.currentTarget.dataset.id;
    const index = Number(animalID.split("").at(-1)) - 1;
    console.log(index);
    props.changeStatus(index);
  }

  const style = {
    fontWeight: props.star ? "normal" : "bold",
  };

  return (
    <tr>
      <td data-field="star" data-id={props.id} onClick={clickStar} style={style}>
        ⭐
      </td>
      <td data-field="name">{props.animalName}</td>
      <td data-field="type">{props.type}</td>
      <td data-field="desc">{props.desc}</td>
      <td data-field="age">{props.age}</td>
    </tr>
  );
}
