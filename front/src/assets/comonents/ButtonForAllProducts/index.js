import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const FillterButton = ({
    filters,
}) => {
    return (
        <div className='flex items-end'>
            <button className="bg-white cursor-pointer border-none font-semibold flex items-center justify-center">
                <span className="leading-none">Ver produtos</span>
                <ChevronRightIcon className="w-4 h-4 relative top-[1px]" />
            </button>
        </div>
    );
};