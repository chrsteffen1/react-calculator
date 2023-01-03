import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9,'x'],
  [4, 5, 6,'-'],
  [1, 2, 3,'+'],
  [0, ".", '=']
]

function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>App</h1>
        <Screen />
      </Wrapper>
    </div>
  );
}

export default App;
