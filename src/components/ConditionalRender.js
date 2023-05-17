import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(true);

  const [name, setName] = useState("Joao");

  return (
    <div>
      <h1>Isso Sera Exibido?</h1>
      {x && <p>Se X for true, sera exibido!</p>}
      {!x && <p>Agora o X eh false</p>}
      <h1>If ternario</h1>
      <div>
        {name === "Diego" ? (
          <div>
            <p>Nome encontrado, {name} </p>
          </div>
        ) : (
          <div>
            <p>Nome nao encontrado.</p>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setName("Diego")}>Aplicar nome Diego</button>
      </div>
    </div>
  )
}

export default ConditionalRender
