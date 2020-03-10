import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph/Graph';
import Menu from './components/Menu/Menu';
import Sorts, { sort_names }  from './Sorts/main';
import { swap }  from './Sorts/Helpers/Swap';

function App() {

  let sorting = false;
  const [Numbers, setNumbers] = useState<Array<number>>([]);
  const [Sort, setSort] = useState<Function>(() => {});
  const [Time, setTime] = useState('')
  const [Option, setOption] = useState(0)

  const generate = function() {
    if (sorting) return;
    let arr = [];

    for (let i = 50; i > 0; i--) {
      let number = Math.floor(Math.random() * (400 - 5) + 5);
      arr.push(number);
    }
    setNumbers(arr);
  }

  const start = function(){

    let moves = Sorts[Option].sort([...Numbers]);
    console.log(moves);
    let i = 0;
    let startTime = Date.now();

        let _loop = setInterval(() => {
        
          if (moves[i]) {
            swap(Numbers, moves[i][0], moves[i][1]);
            setNumbers([...Numbers]);
            setTime(((Date.now() - startTime) / 1000).toFixed(3));
            i++;
          } else {
            clearInterval(_loop);
          }
        }, 5);

  }


  useEffect(() => {
    generate();
  }, [])
  

  return (
    <div className="App">
      <Graph bars={Numbers}/>
      <Menu Actions={[{name: 'Start', action: start}, {name: 'Re-Sort', action: generate}]} Sorts={sort_names} handler={setOption} Time={Time}/>
    </div>
  );
}

export default App;
