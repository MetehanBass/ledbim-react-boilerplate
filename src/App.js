import logo from "./logo.png";

function App() {
  return (
    <div className="App text-center ">
      <header className="App-header flex bg-[#282c34] min-h-screen text-white items-center justify-center flex-col gap-6">
        <img src={logo} className="App-logo h-16" alt="logo" />
        <div className="flex gap-2 items-center">
          <p className="text-base">Installed packages: </p>
          <p className="text-base">
            <span className="text-blue-300">Tailwind</span> /
            <span className="text-blue-600"> React Router Dom</span> /
            <span className="text-red-600"> SASS</span>
          </p>
        </div>
        <p>Go to src/App.js to Edit</p>
        <a
          className="App-link text-blue-300 text-3xl border p-2 border-current"
          href="https://www.ledbim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ledbim
        </a>
        <a
          className="App-link text-base underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
