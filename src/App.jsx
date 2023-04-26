import { useContext } from "react";

import { StyledContainer, StyledStatus, StyledRow, StyledColumn } from "./App.style";
import { GameContext } from "./store/gameContext";
import Board from "./components/board/board.component";
import Button from "./components/button/button.component";
import HistoryList from "./components/history-list/historyList.component";

function App() {
    const { currentPlayer, winner, isPlaying, history, start, reset, backInHistory } = useContext(GameContext);
    const status =
        !isPlaying && !winner ? (
            <span>Waiting for the beginning</span>
        ) : winner ? (
            <span>{winner} is a winner</span>
        ) : (
            <span>{currentPlayer} turn</span>
        );
    return (
        <StyledContainer>
            <StyledRow>
                <StyledColumn width="80%">
                    <StyledStatus>{status}</StyledStatus>
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="80%">
                    <Board />
                </StyledColumn>
                <StyledColumn width="20%">
                    <HistoryList history={history} backInHistory={backInHistory} />
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="80%">
                    <Button {...{ isPlaying, winner, start, reset }} />
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    );
}

export default App;
