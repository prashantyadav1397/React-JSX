// import the react and react dom libraries from
import ReactDOM from "react-dom";
import React from "react";

function buttonText() {
  return "Click on me!";
}

// create a react componennt
const App = () => {
  //   return <div>Hey There</div>;

  //   const buttonText = " Click Me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter Name"
        autoComplete="off"
      />

      {/* HTML 
      <button type="submit" style="backgroundColor: blue; color: white;"></button>
      */}
      {/* JSX */}
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        {/* Submit */}
        {/* {buttonText} */}
        {buttonText()}
      </button>
    </div>
  );
};

//Take the component and show up on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
