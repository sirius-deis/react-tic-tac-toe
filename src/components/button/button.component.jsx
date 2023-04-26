import { StyledButton } from "./button.styles";

const Button = ({ isPlaying, start, reset }) => {
    const handleClick = () => {
        isPlaying ? reset() : start();
    };
    return <StyledButton onClick={handleClick}>{isPlaying ? "Reset" : "Start"}</StyledButton>;
};

export default Button;
