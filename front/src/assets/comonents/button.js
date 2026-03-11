export const StylesButton = ({
    text,
    width,
    height
}) => {
    return (
        <button className={`text-white rounded-none text-sm cursor-pointer border-none bg-[#ba985e] font-semibold filter hover:bg-[#7e6335] ${width} ${height}`}>
            {text}
        </button>
    );
};