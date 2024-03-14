import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const drumList = [
    {
      key: "Q",
      id: "Heater-1",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      id: "Heater-2",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      id: "Heater-3",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      id: "Heater-4",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      id: "Clap",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      id: "Open-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      id: "Kick-n'-Hat",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      id: "Kick",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      id: "Closed-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const [display, setDisplay] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const padUpper = e.key.toLocaleUpperCase();

      const audioPad = document.getElementById(padUpper);
      if (audioPad) {
        audioPad.play();
      }
    });
  }, []);

  const handleClick = (e) => {
    const idTarget = e.target.innerText;
    document.getElementById(idTarget).play();
    setDisplay(e.target.id);
  };

  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>

      <div className="drum-container">
        {drumList.map((pad) => (
          <button
            onClick={handleClick}
            className="drum-pad"
            key={pad.id}
            id={pad.id}
          >
            <audio
              className="clip"
              name={pad.id}
              id={pad.key}
              src={pad.audio}
            ></audio>
            {pad.key}
          </button>
        ))}
      </div>
      <div>
        <p id="display" dangerouslySetInnerHTML={{ __html: display }}></p>
      </div>
    </div>
  );
}

export default App;
