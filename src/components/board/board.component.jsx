import { useContext } from "react";

import { GameContext } from "../../store/gameContext";
import { StyledBoard } from "./board.style";
import Cell from "../cell/cell.component";

const Board = () => {
    const { board, isPlaying, move } = useContext(GameContext);
    const markCell = (i) => isPlaying && move(i);
    const cellToRender = new Array(9)
        .fill(null)
        .map((_, i) => <Cell key={i} value={board[i]} position={i} markCell={markCell} />);
    return <StyledBoard>{cellToRender}</StyledBoard>;
};

export default Board;
