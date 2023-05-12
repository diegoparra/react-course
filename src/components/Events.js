const Events = () => {

  const handleMyEvent = (e) => {
    console.log("este eh meu evento");
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1> Renderizando dentro do if!</h1>;
    } else {
      return <h1> Renderizando dentro do else!</h1>;
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>clique aqui </button>
      </div>
      <div>
        <button onClick={() => console.log("clicou que eu vi")}>clique aqui tambem </button>
      </div>
      <div>
        <button onClick={() => {
          if (true) {
            console.log("Ja ta fazendo gambiarra ne jovem????");
          }
        }}
        >clique aqui tambem para ver o que pega </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}


export default Events;
