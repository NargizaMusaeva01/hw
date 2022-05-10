import { useEffect, useState } from 'react';
import Request from './components/Request';
import './App.css';


function App() {
  let [data, seta] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
      .then(response => response.json())
      .then(data => seta(data))
    console.log(data);
  }, [])

  return (
    <div className='cont' >
      {data.map((i) => {
        return <Request>
          <p>{i.id}</p>
            <h4>{i.title}</h4>
            <p>text</p>
            <img src={i.thumbnailUrl} alt='#' />
        </Request>

      }

      )}
    </div>
  );
}

export default App;
