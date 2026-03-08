export const StylesButton = ({
    width = "200px",
    height = "50px",
    borderRadius = "10px",
    backGround,
    text,
    className
}) => {
    return (
        <button
            className={`styles-button ${className}`}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                backgroundColor: backGround,
                border: "none",
                cursor: "pointer"
                
            }}
        >
            {text}
        </button>
    );
};