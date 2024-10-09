export default function ExperienceItem(props) {
    const {index, item} = props;
    return (
        <li className={`w-full max-w-[1240px] m-auto px-6 py-[30px] border rounded border-zinc-500 space-y-8 ${index%2==0 ? "" : "bg-zinc-800" }`}>
            <header className="space-y-[30px]">
                <div className="flex space-x-[30px] items-center">
                    <img className="h-8" src="/images/icon-javscript.svg" />
                    <h3 className="text-white font-semibold text-xl leading-[24px] tracking-tight">{item.title} - {item.organization}</h3>
                </div>
                <span className="text-zinc-300 font-semibold block">Jan 2017 - Oct 2019</span>

            </header>
            <div>
                <p className="text-zinc-300 tracking-wide">{item.desc}</p>
            </div>
        </li>
    )
}