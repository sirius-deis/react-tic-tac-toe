import { useContext } from "react";

import { StyledContainer, StyledStatus, StyledRow, StyledColumn } from "./App.style";
import { GameContext } from "./store/gameContext";
import Board from "./components/board/board.component";
import Button from "./components/button/button.component";

function App() {
    const { currentPlayer, winner, isPlaying, start, reset } = useContext(GameContext);
    return (
        <StyledContainer>
            <StyledRow>
                <StyledColumn width="60%">
                    <StyledStatus>
                        {winner ? <span>{winner} is a winner</span> : <span>{currentPlayer} turn</span>}
                    </StyledStatus>
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="60%">
                    <Board />
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="60%">
                    <Button {...{ isPlaying, start, reset }} />
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    );
}

export default App;
