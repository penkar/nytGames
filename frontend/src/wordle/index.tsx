import React from "react";

import Guesses from "./Guesses";
import Keyboard from "./Keyboard";
// import Header from "./Header";
// import Modals from "./Modals/index";
// import { GuessContextProvider } from "../context/useWordleGuess";
// import { ModalContextProvider } from "../context/useWordleModal";
// import { StatsContextProvider } from "../context/useWordleStats";

require("./App.css");

// const Layout = ({ children }: { children: ReactNode }) => (
//   <StatsContextProvider>
//     <ModalContextProvider>
//       <GuessContextProvider>{children}</GuessContextProvider>
//     </ModalContextProvider>
//   </StatsContextProvider>
// );

const Index = () => (
  <>
    <Guesses />
    <Keyboard />
  </>
);

/* 
<Header />
<Modals.HowToPlay />
<Modals.Statistics /> 
*/

export default Index;
