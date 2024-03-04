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
    <div className={textImported && "hidden"}>
      <div>
        <article>
          <p>{displayText}</p>
        </article>
      </div>
      <button onClick={sendDataUp} className="bg-red-500">
        Get Started
      </button>
    </div>
  );
};

export default TextGenerator;
