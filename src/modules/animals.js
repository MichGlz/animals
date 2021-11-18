const animals = [
  {
    fullname: "Mandu the amazing cat",
    age: 10,
  },
  {
    fullname: "Mia the black cat",
    age: 10,
  },
  {
    fullname: "Leeloo the growing dog",
    age: 3,
  },
  {
    fullname: "Toothless the trained dragon",
    age: 14,
  },
  {
    fullname: "ScoobyDoo the wondering dog",
    age: 58,
  },
  {
    fullname: "Horsey the horsing horse",
    age: 10,
  },
];

export const animalsClean = animals.map((animal) => {
  return {
    animalName: animal.fullname.split(" ")[0],
    type: animal.fullname.split(" ").at(-1),
    desc: animal.fullname.split(" ")[2],
    age: animal.age,
    id: "animal" + (animals.indexOf(animal) + 1),
    star: false,
  };
});
