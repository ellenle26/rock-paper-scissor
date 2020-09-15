// import React from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";

// function App() {
//   const choices = {
//     rock:
//       "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
//     paper:
//       "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
//     scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
//   };
//   return (
//     <div>
//       <div className="header">ROCK - PAPER - SCISSOR GAME</div>
//       <div className="cardSection">
//         <ChoiceCard
//           title="Player"
//           player={true}
//           winner={false}
//           imgUrl={choices.rock}
//         />
//         <ChoiceCard
//           title="Computer"
//           player={false}
//           winner={true}
//           imgUrl={choices.paper}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
};
export default class componentName extends Component {
  render() {
    return (
      <div>
        <div className="header">ROCK - PAPER - SCISSOR GAME</div>
        <div className="cardSection">
          <ChoiceCard title="Player" winner={false} imgUrl={choices.rock} />
          <ChoiceCard title="Computer" winner={true} imgUrl={choices.paper} />
        </div>
      </div>
    );
  }
}
