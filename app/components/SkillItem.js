export default function SkillItem({item}) {
  
    return (
        <li className={`w-full p-6 border-2 rounded border-black aspect-square space-y-8`}>
            <div className="flex justify-center">
                <img src="/images/icon-javscript.svg" />

            </div>
            <div className="text-center">Javascript</div>
        </li>
    )
}