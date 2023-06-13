import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`

  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 4px;
    background: #192120;
  }  

  progress[value]::-webkit-progress-value {
    height: 4px;
    background: #FFC122;
    transition: width 0.6s;
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max}   />
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
