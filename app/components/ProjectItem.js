export default function ProjectItem(props) {
    const {index} = props;
    return (
        <li className="max-w-[610px] lg:max-w-[1240px] m-auto">
            <a className={`lg:flex space-y-7 ${index%2 == 1 ? "lg:flex-row-reverse" : ""} lg:space-y-[unset]`}>
                <img src="/images/thumbnail.png" alt="" className={`rounded w-full max-w-[610px] lg:w-6/12 lg:flex-1 ${index%2 == 1 ? "lg:pl-[2%]" : "lg:pr-[2%]"} `}/>
                <div className={`flex-1 space-y-7  ${index%2 == 1 ? "lg:pr-[8%]" : "lg:pl-[8%]"} flex flex-col justify-center`}>
                    <h3 className="text-xl text-white font-extrabold">{index + 1 }</h3>
                    <h3 className="text-xl text-white font-extrabold">Crypto Screener Application</h3>
                    <p className="text-zinc-500">I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>

                </div>
            </a>
        </li>
    )
}