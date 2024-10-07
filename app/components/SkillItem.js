export default function SkillItem(props) {
  
    return (
        <li className={`max-w-[160px] w-full p-6 border-2 rounded border-black aspect-square space-y-8 m-auto`}>
            <a>
                <div className="flex justify-center">
                    <img src="/images/icon-javscript.svg" />

                </div>
                <div className="text-center">Javascript</div>

            </a>
        </li>
    )
}