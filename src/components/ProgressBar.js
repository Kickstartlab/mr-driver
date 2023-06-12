import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`

  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
    transition: width 2s linear;
  }

  progress[value]::-webkit-progress-bar {
    height: 25px;
    background: #192120;
    box-shadow: inset 2.62388px 14.8687px 32.3612px rgba(3, 3, 3, 0.6), inset 0px 0px 4.37313px rgba(255, 255, 255, 0.1);
  }  

  progress[value]::-webkit-progress-value {
    height: 25px;
    background: #FFC122;
    box-shadow: inset 2.62388px 14.8687px 32.3612px rgba(3, 3, 3, 0.6), inset 0px 0px 4.37313px rgba(255, 255, 255, 0.1);
    transition: width 0.1s ease;
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
        </Container>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
};

ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "100%"
};

export default ProgressBar;
