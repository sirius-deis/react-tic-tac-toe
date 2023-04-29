import PropTypes from "prop-types";
import { StyledButton } from "./button.styles";

const Button = ({ isPlaying, winner, start, reset }) => {
    const handleClick = () => {
        isPlaying ? reset() : start();
    };
    return <StyledButton onClick={handleClick}>{isPlaying ? "Reset" : "Start"}</StyledButton>;
};

export default Button;

Button.propTypes = {
    isPlaying: PropTypes.bool,
    winner: PropTypes.string,
    start: PropTypes.func,
    reset: PropTypes.func,
};
