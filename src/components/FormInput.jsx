
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
                <h3>{formattedText}</h3>
            </div>
            <div>
                <form>
                    <div>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type here"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput;
