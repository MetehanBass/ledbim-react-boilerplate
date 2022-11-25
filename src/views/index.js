import React from "react";
import logo from "logo.png";

const Views = () => {
  return (
    <div className="App text-center ">
      <header className="App-header flex bg-[#282c34] min-h-screen text-white items-center justify-center flex-col gap-6">
        <img src={logo} className="App-logo h-16" alt="logo" />

        <div className="flex gap-2 items-center">
          <p className="text-base flex gap-6">
            <span className="text-blue-100">Tailwind</span> |
            <span className="text-red-100"> SASS</span> |
            <span className="text-blue-200">Styled-icons</span> |
            <span className="text-red-200">Styled-components</span> |
            <span className="text-blue-300"> React-Error-Boundary</span> |
            <span className="text-red-300"> React Router Dom</span>
          </p>
        </div>
        <p>Go to src/views/index.js to Edit</p>
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
          href="https://beta.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Views;
