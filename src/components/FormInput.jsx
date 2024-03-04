
function FormInput({ input, setInput, text, textImported}) {

  return (
    <div className={!textImported && "hidden"}>
        <div>
            {/*   //3 Przekazanie propsow z TextGenerator do home a z home do FormInput */}
            <h3>{text}</h3>
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
