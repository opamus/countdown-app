import { useState } from "react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState();
  const [cardTitle, setCardTitle] = useState();
  const [repeat, setRepeat] = useState();
  const [darkMode, setDarkMode] = useState();

  const sampleData = [
    {
      title: "Olli's birthday",
      date: "2022-07-21T10:51:36.790Z",
      repeat: "0",
      darkMode: true,
    },
    {
      title: "Holiday in Greece",
      date: "2022-07-21T10:51:36.790Z",
      repeat: "0",
      darkMode: false,
    },
  ];

  console.log(date, cardTitle, repeat, darkMode);
  console.log(sampleData);

  const handleSubmit = (title, date, repeat, darkMode) => {
    if (repeat === 0 || repeat === 1) {
      sampleData.push({
        title: { title },
        date: { date },
        repeat: { repeat },
        darkMode: { darkMode },
      });
    }
  };

  return (
    <div className="App">
      <h1>Countdown</h1>

      {isOpen && (
        <div className="FormContainer">
          <form onSubmit={handleSubmit(cardTitle, date, repeat, darkMode)}>
            <label>
              {"Title: "}
              <input
                name="title"
                type="text"
                onChange={(e) => setCardTitle(e.target.value)}
              ></input>
            </label>
            <br />
            <label>
              {"Date: "}
              <input
                name="date"
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </label>
            <br />
            <label>
              {"Repeat: "}
              <input
                name="repeat"
                type="number"
                placeholder="0"
                onChange={(e) => setRepeat(e.target.value)}
              ></input>
            </label>
            <br />
            <label>{"Dark or light mode: "}</label>
            <input
              type="text"
              name="darkmode"
              placeholder="Light"
              onChange={(e) => setDarkMode(e.target.value)}
            />
            <br />
            <button
              className="Button"
              onClick={() => handleSubmit(cardTitle, date, repeat, darkMode)}
            >
              Accept
            </button>
          </form>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="Button">
        {!isOpen ? "Create new" : "Cancel"}
      </button>

      {sampleData.map((event, i) => {
        return (
          <div key={i} className="Container" style={{ background: "#123123" }}>
            <h2>{event.title}</h2>
            <h2>{event.date}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
