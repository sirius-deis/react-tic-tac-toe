import { StyledBoard } from "./board.style";
import Cell from "../cell/cell.component";

const Board = () => {
    const cellToRender = new Array(9).fill(null).map((_, i) => <Cell key={i} position={i} />);
    return <StyledBoard>{cellToRender}</StyledBoard>;
};

export default Board;
