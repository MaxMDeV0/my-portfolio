import List from "../components/List"
import ProjectItem from "../components/ProjectItem"

export default function Projects() {
    return (
        <section className="pt-[70px] bg-black">
			<List isBlack={true} title="Projects" Item={ProjectItem} ulClassName="w-full space-y-5"/>
        </section>        
    )
}