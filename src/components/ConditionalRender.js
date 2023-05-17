import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(true);
  return (
    <div>
      <h1>Isso Sera Exibido?</h1>
      {x && <p>Se X for true, sera exibido!</p>}
      {!x && <p>Agora o X eh false</p>}
    </div>
  )
}

export default ConditionalRender
