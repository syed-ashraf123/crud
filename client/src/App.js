import { useEffect, useState } from "react";
import Cards from "./Cards";
import Axios from "axios";
function App() {
  const [details, setDetails] = useState([]);
  const get = async () => {
    Axios.get("http://localhost:5000/").then(async (response) => {
      var res = await response.data.Success;
      console.log(res);
      setDetails(res);
    });
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <div className="App">
      {details.map((result) => (
        <Cards
          name={result.name}
          age={result.age}
          city={result.city}
          country={result.country}
          id={result._id}
        />
        // <Cards />
      ))}
    </div>
  );
}

export default App;
