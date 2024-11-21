import React from 'react';
import "./Text.css"
const Text = ({ children, color, fontSize, fontWeight, textAlign, lineHeight, marginLeft, marginRight, marginTop, marginBottom, padding, letterSpacing, textTransform, whiteSpace, ...rest }) => {
    const styles = {
        color,
        fontSize,
        fontWeight,
        textAlign,
        lineHeight,
        padding,
        letterSpacing,
        textTransform,
        whiteSpace,
        marginBottom,
        marginTop,
        marginRight,
        marginLeft
    };

    return (
        <span style={styles} {...rest}>
            {children}
        </span>
    );
};

export default Text;
