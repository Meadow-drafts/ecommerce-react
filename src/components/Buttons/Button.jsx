
function Button({onClick, className, children, customClassName}){
    return(
        <>
        <button
        onClick={onClick}
        className={` bg-primary items-center justify-center mb-5 px-5 py-3 text-base font-medium text-center text-white focus:ring-4 focus:ring-gray-100 border-gray-700 hover:bg-gray-700 ${className} ${customClassName}`}>
        {children}
        </button>
        </>
    )
};
export default Button;