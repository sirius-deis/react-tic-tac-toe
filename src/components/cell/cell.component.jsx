import PropTypes from "prop-types";

import { StyledCell } from "./cell.style";

const Cell = ({ value, markCell, position }) => {
    return <StyledCell onClick={() => markCell(position)}>{value}</StyledCell>;
};

export default Cell;

Cell.propTypes = {
    value: PropTypes.string,
    markCell: PropTypes.func,
    position: PropTypes.number,
};
