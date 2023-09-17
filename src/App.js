import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  
  const handleClick = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum].text); // Sadece quotes metni olarak ayarlanıyor.
      });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="App">
      <div className="quotes">
        <p>{quotes}</p> {/* Yalnızca quotes metnini gösteriyoruz. */}
        
        <div className="btnContainer">
        <button onClick={handleClick}>Quotes</button>
        </div>
      </div>
      
    </div>
  );
};

export default App;