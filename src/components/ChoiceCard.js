import React from "react";

export default function choiceCard(props) {
  let { winner, imgUrl, title } = props;
  return (
    <div
      className={`choiceCard ${
        winner === "win" ? `winborder` : winner === "loss" ? `loseborder` : ``
      }`}
    >
      <h2 className={`${winner}`}>{title}</h2>
      <img src={imgUrl} alt="" />
      <p className={`${winner}`}>{winner.toUpperCase()}</p>
    </div>
  );
}

// import React, { Component } from "react";

// export default class componentName extends Component {
//   render() {
//     return (
//       <div
//         className={`choiceCard ${
//           this.props.winner ? `winborder` : `loseborder`
//         }`}
//       >
//         <h2 className={`${this.props.winner ? `winner` : `loser`}`}>
//           {this.props.title}
//         </h2>
//         <img src={this.props.imgUrl} alt="" />
//         <div className={`${this.props.winner ? `winner` : `loser`}`}>
//           {this.props.winner ? `WON` : `YOU LOSS`}
//         </div>
//       </div>
//     );
//   }
// }
