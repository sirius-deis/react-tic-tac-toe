import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 40%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media screen and (max-width: 1250px) {
        width: 60%;
    }
    @media screen and (max-width: 850px) {
        width: 80%;
    }
    @media screen and (max-width: 650px) {
        width: 90%;
    }
`;

export const StyledStatus = styled.div`
    font-size: 2rem;
`;

export const StyledRow = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledColumn = styled.div`
    width: ${(props) => props.width};
    display: flex;
    justify-content: center;
`;
