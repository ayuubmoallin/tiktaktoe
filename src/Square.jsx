import React from "react";

const Square = (props) => {
  console.log(props.board, props.player);

  const handleClick = function () {
    if (!props.squareValue) {
      if (props.player) {
        props.board.splice(props.index, 1, "X");
        props.setBoard(props.board);
        props.setPlayer(!props.player);
      } else {
        props.board.splice(props.index, 1, "O");
        props.setBoard(props.board);
        props.setPlayer(!props.player);
      }
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? "O" : props.squareValue}
    </div>
  );
};

export default Square;
//
