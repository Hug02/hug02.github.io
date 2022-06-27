import Header from "./components/Header/Header";
import Charts from "./components/Charts/Charts";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Charts, null)
  );
}

export default App;