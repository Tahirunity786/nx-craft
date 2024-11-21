

import "./Buttons.css"

const Button = ({ style, onClick, content, className = '', type = 'button', ...props }) => {

    return (
        <button style={style} className={`btn ${className}`} onClick={onClick} type={type} {...props}>
            {content}
        </button>
    )
}


export default Button;
