import './App.css';
import UseFetch2 from './UseFetch';

function App() {

  const { data, loading, error } = UseFetch2("https://jsonplaceholder.typicode.com/users", 3000);
  console.log(data);

  if(loading) {
    return <div>Loading...</div>
  }
  

  return (
      <div>
        <ul>
        {data.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
        </ul>
      </div>
  )
}


export default App;
