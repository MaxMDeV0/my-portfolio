import List from "../components/List"
import ProjectItem from "../components/ProjectItem"

export default function Project() {
    return (
        <section className="pt-[70px] bg-black">
			<List isBlack={true} title="Projects" Item={ProjectItem} ulClassName="w-full space-y-5 sm:space-y-8 md:space-y-12 lg:space-y-20 xl:space-y-24 2xl:space-y-28"/>
        </section>        
    )
}