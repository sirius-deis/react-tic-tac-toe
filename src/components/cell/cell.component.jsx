import { StyledCell } from "./cell.style";

const Cell = ({ value, markCell, position }) => {
    return <StyledCell onClick={() => markCell(position)}>{value}</StyledCell>;
};

export default Cell;
