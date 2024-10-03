export default function ExperienceItem(props) {
    const {index} = props;
    return (
        <li className={`w-full h-[426px] px-6 py-[30px] border rounded border-zinc-500 space-y-8 ${index%2==0 ? "" : "bg-zinc-800" }`}>
            <header className="space-y-[30px]">
                <div className="flex space-x-[30px] items-center">
                    <img className="h-8" src="/images/icon-javscript.svg" />
                    <h3 className="text-white font-semibold text-xl leading-[24px] tracking-tight">Lead Software Engineer at Google</h3>
                </div>
                <span className="text-zinc-300 font-semibold block">Jan 2017 - Oct 2019</span>

            </header>
            <div>
                <p className="text-zinc-300 tracking-wide">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
            </div>
        </li>
    )
}