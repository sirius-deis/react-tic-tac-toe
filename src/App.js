import { useContext } from "react";

import { StyledContainer, StyledStatus, StyledRow, StyledColumn } from "./App.style";
import { GameContext } from "./store/gameContext";
import Board from "./components/board/board.component";
import Button from "./components/button/button.component";

function App() {
    const history = useContext(GameContext);
    return (
        <StyledContainer>
            <StyledRow>
                <StyledColumn width="60%">
                    <StyledStatus>X move</StyledStatus>
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="60%">
                    <Board />
                </StyledColumn>
            </StyledRow>
            <StyledRow>
                <StyledColumn width="60%">
                    <Button />
                </StyledColumn>
            </StyledRow>
        </StyledContainer>
    );
}

export default App;
