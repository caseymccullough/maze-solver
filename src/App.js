import logo from './logo.svg';
import './App.css';
import Stack from './Stack.js'
import Maze from './Maze.js'

function App() {

  let stack = new Stack();
  let maze = new Maze();

  console.log (stack.isEmpty());
  stack.push("Adam");
  stack.push("Bill");
  console.log(stack.isEmpty());
  console.log (stack.items.length);
  console.log (stack.toString());

  console.log (Maze.TRIED);
  console.log (Maze.PATH);



  return (
    <div className="App">
      <h1>Maze Solver</h1>
    </div>
  );
}

export default App;
