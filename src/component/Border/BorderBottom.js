// BottomBorder.js
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBottomBorder = styled.div`
  width: ${({ width }) => width || "100%"};
  border-bottom: ${({ borderthickness, color }) => `${borderthickness || "1px"} solid ${color || "#000"}`};
  margin: ${({ margin }) => margin || "0"};
`;

const BorderBottom = ({ width, color, borderthickness, margin }) => {
    return <StyledBottomBorder width={width} color={color} borderthickness={borderthickness} margin={margin} />;
};

// Define PropTypes for better developer experience
BorderBottom.propTypes = {
    width: PropTypes.string,
    color: PropTypes.string,
    borderthickness: PropTypes.string,
    margin: PropTypes.string,
};

export default BorderBottom;
