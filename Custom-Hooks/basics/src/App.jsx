import { useEffect, useState } from 'react';
import './App.css';
import UseFetch2 from './UseFetch';
import { usePrev } from './UsePrev';
import UseIsOnline from './UseIsOnline';
import UseDebounce, { UseDebounce2 } from './UseDebounce';

function App() {

//using useFetch2...

  // const { data, loading, error } = UseFetch2("https://jsonplaceholder.typicode.com/users", 3000);
  // console.log(data);

  // if(loading) {
  //   return <div>Loading...</div>
  // }
  

  // return (
  //     <div>
  //       <ul>
  //       {data.map((d) => (
  //         <li key={d.id}>{d.name}</li>
  //       ))}
  //       </ul>
  //     </div>
  // )

  //using usePrev...
    // const [count, setCount] = useState(0);
    // const prevValue = usePrev(count);

    // return (
    //   <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //     <h1>Counter with usePrev Hook</h1>
    //     <p>Count: {count}</p>
    //     <p>Previous Count: {prevValue}</p>
    //     <button onClick={() => setCount(c => c+1)}>Increment</button>
    //     <button onClick={() => setCount(c => c-1)} style={{ marginLeft: '10px' }}>Decrement</button>
    //   </div>
    // )

  // using UseIsOnline
    //   const isOnline = UseIsOnline();

    // return (
    //   <div>
    //     {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
    //   </div>
    // );

    // using UseDebounce...
    function expensiveOperation() {
      // some expensive operation
      console.log("Some Expensive Operation");
    }
    const debounceFn = UseDebounce(expensiveOperation);

    return (
      <div>
        <input type='text' onChange={debounceFn}/>
      </div>
    )

    // using UseDebounce2...
    const [inputVal, setInputVal] = useState("");

    function change(e) {
      setInputVal(e.target.value);
    }

    const debouncedValue = UseDebounce2(inputVal, 200);

    useEffect(() => {
      //Some expensive operation
      console.log("Exp. Opn.")
    }, [debouncedValue]);

    return (
      <div>
        <input id='input' type='text' onChange={change}/>
      </div>
    )
}


export default App;
