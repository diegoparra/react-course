import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Liz", "joao", "Carla"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Cida", age: 79 },
    { id: 2, name: "Carlos", age: 55 },
    { id: 3, name: "Marcerlo", age: 38 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {

      return prevUsers.filter((user) => randomNumber !== user.id)

    })
  }

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
      <div>
        <button onClick={deleteRandom}> Delete Random User</button>
      </div>
    </div >
  );
};

export default ListRender
