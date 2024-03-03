import TextGenerator from "../TextGenerator";

function Home() {
  return (
    <div>
      <h1 className="text-black text-center text-2xl uppercase">
        Speed typing app
      </h1>
      <TextGenerator/>
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Start
        </button>
        <button className="hidden">Restart</button>
      </div>
    </div>
  );
}

export default Home;
