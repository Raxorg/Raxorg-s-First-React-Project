import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/FunctionalComponent";
import Comp from "./components/ClassComponent";
import Profile from "./components/Profile";
import PropClass from "./components/ClassPropsExample";
import Counter from "./components/Counter";
import FunctionalButton from "./components/FunctionalEvent";
import ClassEvent from "./components/ClassEvent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
        <Comp prop="Proppy" />
        <Profile name="Groxar" lastname="Sergosia">
          <br></br>Child component reporting
        </Profile>
        <Profile name="Raxorg" lastname="Montoya" />
        <Profile name="Silent" lastname="Trap" />
        <PropClass prop="Example"></PropClass>
        <Counter></Counter>
        <FunctionalButton></FunctionalButton>
        <ClassEvent></ClassEvent>
      </header>
    </div>
  );
}

export default App;
