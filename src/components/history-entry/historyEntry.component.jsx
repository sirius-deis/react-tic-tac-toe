import PropTypes from "prop-types";

import { StyledHistoryEntry, StyledHistoryButton } from "./historyEntry.style";

const HistoryEntry = ({ index, moveInHistory }) => {
    const testToRender = index === 0 ? "Go to game start" : `Go to move #${index}`;
    return (
        <StyledHistoryEntry>
            <StyledHistoryButton onClick={() => moveInHistory(index)}>{testToRender}</StyledHistoryButton>
        </StyledHistoryEntry>
    );
};

export default HistoryEntry;

HistoryEntry.propTypes = {
    index: PropTypes.number,
    moveInHistory: PropTypes.func,
};
