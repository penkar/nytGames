import React from "react";

import Guesses from "./Guesses";
import Keyboard from "./Keyboard";
// import Header from "./Header";
// import Modals from "./Modals/index";

require("./App.css");

/* 
<Header />
<Modals.HowToPlay />
<Modals.Statistics /> 
*/
const Index = () => (
  <>
    <Guesses />
    <Keyboard />
  </>
);

export default Index;
