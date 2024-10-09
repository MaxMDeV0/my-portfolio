export default function List(props) {
    const {isBlack, title, Item, ulClassName, data} = props;

    return (
        <section className={`flex flex-col py-10 px-4 space-y-7 items-center bg-${isBlack ? "black" : "white" } lg:py-[60px] min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28`}>
            <h2 className={`h-[4.5rem] text-center leading-[4.5rem] text-[1.75rem] text-${!isBlack ? "black" : "white" } lg:text-4xl lg:leading-[5.25rem] lg:h-[5.25rem] xl:text-5xl xl:leading-[6rem] xl:h-[6rem]`}>My <strong>{title}</strong></h2>
            <ul className={ulClassName} >{data.map((item, index)=>{ return <Item item={item} key={index} index={index}/> } )}</ul>
        </section>
    )

}