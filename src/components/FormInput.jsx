
function FormInput({ input, setInput, text, textImported }) {
    let textArray = text.split("");
    textArray = textArray.slice(1);

    const formattedText = textArray.map((char, index) => {
        let colorClass = ""; // Klasa koloru, która zostanie przypisana do elementu span
        if (index < input.length) {
            colorClass = char === input[index] ? "text-green-500" : "text-red-500"; // Kolory zielony i czerwony z Tailwind CSS
        }
        return (
            <span key={`${char}_${index}`} className={colorClass}>{char}</span>
        );
    });

    return (
        <div className={!textImported && "hidden"}>
            <div>
                <h3 className="mb-5">{formattedText}</h3>
            </div>
            <div>
                <form className="w-full">
                 
                        <input className="w-full mb-5 text-black border-2 border-black px-2 py-4 outline-none h-auto text-nowrap"  type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type here"/>
                    
                </form>
            </div>
        </div>
    );
}

export default FormInput;
