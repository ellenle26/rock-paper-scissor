// import React from "react";

// export default function Box(props) {
//   let { winner, player, title, imgUrl } = props;
//   console.log("Props:", props);
//   winner = !winner;
//   return (
//     <div
//       className={`${player ? `playerCard` : `computerCard`} ${
//         winner ? `winborder` : `loseborder`
//       }`}
//     >
//       <h2>{title}</h2>
//       <img src={imgUrl} alt="" />
//       <div className={`${winner ? `winner` : `loser`}`}>
//         {winner ? `YOU WON` : `YOU LOSE`}
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div
        className={`choiceCard ${
          this.props.winner ? `winborder` : `loseborder`
        }`}
      >
        <h2 className={`${this.props.winner ? `winner` : `loser`}`}>
          {this.props.title}
        </h2>
        <img src={this.props.imgUrl} alt="" />
        <div className={`${this.props.winner ? `winner` : `loser`}`}>
          {this.props.winner ? `WON` : `YOU LOSS`}
        </div>
      </div>
    );
  }
}
