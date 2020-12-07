import React, { useEffect, useState } from "react";

const App = () => {
 const [data, setData] = useState();
 const [error, setError] = useState(null);
 useEffect(() => {
   function fetchData() {
     fetch("https://jsonplaceholder.typicode.com/users")
       .then(res => res.json())
       .then(res => setData(res))
       .catch(err => setError(err));
   }

   fetchData();
 }, []);
 return <div />;
};
export default App;