// styles
import "./App.css";

// components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <h1> hello Parra </h1>
      <FirstComponent />
      <li>Essa eh minha lista inicial</li>
      <TemplateExpressions />
      <Events />
      <h2>Meu Emmet coisa linda de ai meu deus</h2>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
    </div>
  );
}

export default App;
