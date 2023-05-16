import { useState } from "react";

const ListRender = () => {

  const [list] = useState(["Liz", "joao", "Carla"]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div >
  );
};

export default ListRender
