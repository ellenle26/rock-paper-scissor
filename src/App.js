import React, { useState } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";

const choiceImgs = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissors: "images/scissors.png",
};

function App() {
  let [item, setItem] = useState("");
  let [imgUrl, setImgUrl] = useState("");
  let [computerItem, setComputerItem] = useState("");
  let [computerImg, setComputerImg] = useState("");
  let [playerResult, setPlayerResult] = useState("");
  let [conputerResult, setComputerResult] = useState("");
  let [score, setScore] = useState([]);
  let [buttonStatus, setButtonStatus] = useState(true);

  // below is function
  const getRandomChoices = () => {
    let choices = ["rock", "scissors", "paper"];
    let choicesIndex = Math.floor(Math.random() * 3);
    return choices[choicesIndex];
  };

  const checkResult = (choice1, choice2) => {
    let result;
    if (choice1 === choice2) {
      result = "tie";
    } else if (choice1 === "rock") {
      result = choice2 === "paper" ? "loss" : "win";
    } else if (choice1 === "scissors") {
      result = choice2 === "rock" ? "loss" : "win";
    } else if (choice1 === "paper") {
      result = choice2 === "scissors" ? "loss" : "win";
    }
    return result;
  };

  // below is main function
  const start = () => {
    setButtonStatus(false);
  };

  const selectItem = (clickedItem) => {
    if (score.length > 18) {
      setButtonStatus(true);
    }
    setItem(clickedItem);
    setImgUrl(choiceImgs[clickedItem]);
    computerItem = getRandomChoices();
    setComputerItem(computerItem);
    setComputerImg(choiceImgs[computerItem]);
    setPlayerResult(checkResult(clickedItem, computerItem));
    setComputerResult(checkResult(computerItem, clickedItem));
    setScore([...score, checkResult(clickedItem, computerItem)]);
  };

  // const functionGiDo = (input) => {
  //   console.log(input);
  // };
  // below is render
  return (
    <div>
      <div className="header">ROCK - SCISSORS - PAPER GAME</div>
      <div className="cardSection">
        <ChoiceCard
          title="Player"
          winner={playerResult}
          imgUrl={imgUrl}
          item={item}
        />
        <div className="history">
          <p>Round : Result</p>
          {score.map((item, index) => {
            return (
              <div>
                {index + 1} : {item}
              </div>
            );
          })}
        </div>
        <ChoiceCard
          title="Computer"
          winner={conputerResult}
          imgUrl={computerImg}
          item={computerItem}
        />
      </div>
      <div className="controlSection">
        <button className="controlBttn" onClick={() => start()}>
          START GAME
        </button>
        <button
          className="controlBttn"
          onClick={() => selectItem("rock")}
          disabled={buttonStatus}
        >
          <i class="far fa-hand-rock"></i>&nbsp;Rock
        </button>
        <button
          className="controlBttn"
          onClick={() => selectItem("scissors")}
          disabled={buttonStatus}
        >
          <i class="far fa-hand-scissors"></i>&nbsp;Scissors
        </button>
        <button
          className="controlBttn"
          onClick={() => selectItem("paper")}
          disabled={buttonStatus}
        >
          <i class="far fa-hand-paper"></i>&nbsp;Paper
        </button>
      </div>
      {/* <input onChange={(e) => functionGiDo(e.target.value)} /> */}
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// const choices = {
//   rock:
//     "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
//   paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
//   scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
// };
// export default class componentName extends Component {
//   render() {
//     return (
//       <div>
//         <div className="header">ROCK - PAPER - SCISSOR GAME</div>
//         <div className="cardSection">
//           <ChoiceCard title="Player" winner={false} imgUrl={choices.rock} />
//           <ChoiceCard title="Computer" winner={true} imgUrl={choices.paper} />
//         </div>
//       </div>
//     );
//   }
// }
