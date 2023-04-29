import PropTypes from "prop-types";

import { StyledHistoryList } from "./historyList.style";
import HistoryEntry from "../history-entry/historyEntry.component";

const HistoryList = ({ history, backInHistory }) => {
    const moveInHistory = (i) => {
        backInHistory(i);
    };
    const historyListToRender = [null, ...history].map((_, i) => (
        <HistoryEntry key={i} index={i} moveInHistory={moveInHistory}></HistoryEntry>
    ));
    return <StyledHistoryList>{historyListToRender}</StyledHistoryList>;
};

export default HistoryList;

HistoryList.propTypes = {
    history: PropTypes.array,
    backInHistory: PropTypes.func,
};
