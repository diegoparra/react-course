import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Liz", "joao", "Carla"]);

  const [users] = useState([
    { id: 1, name: "Cida", age: 79 },
    { id: 3, name: "Carlos", age: 55 },
    { id: 4, name: "Marcerlo", age: 38 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((users) => (
          <li key={users.id}>nome: {users.name}, idade: {users.age}</li>
        ))}
      </ul>
    </div >
  );
};

export default ListRender
