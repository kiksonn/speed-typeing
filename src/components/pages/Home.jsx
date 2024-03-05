import CountdownTimer from "../../CountdownTimer";
import FormInput from "../FormInput";
import Results from "../Results";
import TextGenerator from "../TextGenerator";
import { useState } from "react";
function Home() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [textImported, setTextImported] = useState(false);

  const [startTimer, setStartTimer] = useState(false);
  const [finished, setFinidhed] = useState(false);

  //2 Przekazanie propsow z TextGenerator do home a z home do FormInput
  const getParagraph = (paragraph) => {
    setText(paragraph);
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-black text-center text-2xl uppercase">
        Speed typing app
      </h1>

      <TextGenerator
        getParagraph={getParagraph}
        textImported={textImported}
        setTextImported={setTextImported}
      />

      <CountdownTimer
        startTimer={startTimer}
        setStartTimer={setStartTimer}
        setFinidhed={setFinidhed}
      />

      <FormInput
        text={text}
        input={input}
        textImported={textImported}
        setInput={setInput}
      />
      <Results text={text} input={input} finished={finished} />
      <div>
      <button
  onClick={() => {
    setStartTimer(true); // Ustawienie wartości startTimer na true po kliknięciu przycisku
    // Dodanie klasy 'hidden' w momencie kliknięcia przycisku
    document.getElementById("startButton").classList.add("hidden");
  }}
  id="startButton" // Dodanie identyfikatora dla przycisku
  className={
    !textImported || finished
      ? "hidden"
      : "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  }
>
  Start
</button>


        <button
          onClick={() => window.location.reload(false)}
          className={!finished && "hidden"}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Home;
