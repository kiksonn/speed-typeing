import { useState } from "react";
import axios from "axios";

const EndpointAPI = "https://api.quotable.io/random";

const TextGenerator = ({ getParagraph, textImported, setTextImported }) => {
  const [displayText, setDisplayText] = useState("");

  const getText = async () => {
    let paragraph = "";

    for (let i = 0; i < 6; i++) {
      const respone = await axios.get(EndpointAPI);
      let new_paragraph = respone.data.content;
      paragraph = paragraph + " " + new_paragraph;
      setDisplayText(paragraph);
    }

    return paragraph
  };

  //1 Przekazanie propsow z TextGenerator do home a z home do FormInput

  const sendDataUp = async() => {
    const value = await getText()
    getParagraph(value)
    setTextImported(true)
  }

  return (
    <div className={textImported ? "hidden": "flex flex-col justify-center items-center"}>
      <div >
        <article>
          <p className="mb-5">{displayText}</p>
        </article>
      </div>
      <button onClick={sendDataUp} className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Generate Text
      </button>
    </div>
  );
};

export default TextGenerator;
