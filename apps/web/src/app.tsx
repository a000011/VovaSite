import React from "react";
import Greet from "./greet/greetings";

const App: React.FC = () => {
  return (
    <div>
      <h1>React App is Working!</h1>
      <p>Welcome to your new project.</p>
      <Greet />
    </div>
  );
};

export default App;
