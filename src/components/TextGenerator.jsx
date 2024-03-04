import { useState } from "react";
import axios from "axios";

const EndpointAPI = "https://api.quotable.io/random"

const TextGenerator = () => {

  const [displayText, setDisplayText] = useState("")

  const getText = async () => {

    let paragraph =""

    for(let i=0; i<6; i++){
      const respone = await axios.get(EndpointAPI)
      let new_paragraph = respone.data.content
      paragraph = paragraph + " " + new_paragraph
      setDisplayText(paragraph)
    }

  }

  return (
    <div>
      <div>
        <article>
          <p>
            {displayText}
          </p>
        </article>
      </div>
      <button onClick={getText} className="bg-red-500">Get Started</button>
    </div>
  );
};

export default TextGenerator;
