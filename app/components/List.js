export default function List(props) {
    const {isBlack, title, Item, ulClassName} = props;
    const array = ["js", "js","js", "js","js", "js"];


    return (
        <section className={`flex flex-col py-10 px-4 space-y-7 items-center bg-${isBlack ? "black" : "white" }`}>
            <h2 className={`h-[4.5rem] text-center leading-[4.5rem] text-[1.75rem] text-${!isBlack ? "black" : "white" }`}>My <strong>{title}</strong></h2>
            <ul className={ulClassName} >{array.map((item, index)=>{ return <Item item={item} key={index} index={index}/> } )}</ul>
        </section>
    )

}