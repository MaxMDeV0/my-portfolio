export default function CrudValidateButton({cancelHandler}) {
    return (
        <div className={`absolute bottom-4  flex justify-evenly space-x-1 w-full left-0 `}>
            <button className="absolute h-8 w-8 right-[52%]  rounded-full border-2 border-[red] flex justify-center items-center bg-white" onClick={cancelHandler}>
                <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="red">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </button>
            <button type="submit" className=" absolute 0 h-8 w-8 left-[52%]  rounded-full border-2 border-[green] flex justify-center items-center bg-white">
                <svg height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="green">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
            </button>
        </div>
    )
}