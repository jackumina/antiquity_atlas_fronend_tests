import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [buttonText, setButtonText] = useState('Click me!');
  const handleClick = () => {
    if (buttonText === 'Click me!') {
      setButtonText('You clicked me!');
    } else {
      setButtonText('Click me!');
    }
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <div>
      <h1>React + FastAPI</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;
