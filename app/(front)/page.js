"use client" 

import ExperienceItem from "@components/ExperienceItem";
import List from "@components/List";
import SkillItem from "@components/SkillItem";
import About from "@components/About";
import ProjectItem from "@components/ProjectItem";
import Contact from "@components/Contact";
import Footer from "@components/Footer";


export default function Home() {
	return (
		<>
			<section className="py-10 px-4 mt-[70px]  flex flex-col items-center min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28 lg:flex-row-reverse lg:top-0 lg:pr-[550px] xl:pr-[700px] lg:mt-[104px] lg:py-[60px] 2xl:pr-[750px] max-w-[1440px] mx-auto  relative">
				<picture>
					<source media="(max-width: 549px)" srcSet="/images/my-portfolio-developper-anaglyph.svg"/>
					<source media="(min-width: 550px)" srcSet="/images/my-portfolio-developper-anaglyph-big.svg"/>
				<img src="/images/my-portfolio-developper-anaglyph.svg" alt="developer anaglyph" className="md:min-w-[550px] md:max-w-[550px] lg:absolute lg:top-[70px] lg:right-20 xl:right-24 xl:min-w-[700px] xl:max-w-[700px] 2xl:min-w-[800px] 2xl:max-w-[800px] z-[-1]"/>
				</picture>

				<div className="mt-12 space-y-12 xl:mt-36 2xl:mt-44 ">
					<div className="space-y-3 xl:space-y-4 2xl:space-y-5">
						<span className="block text-[28px] xl:text-4xl 2xl:text-5xl leading-8 tracking-tight">Hi, i'am <strong>Maxence Merter.</strong></span>
						<span className="block text-[28px] xl:text-4xl 2xl:text-5xl leading-8 "><strong>Fullstack</strong> Developer</span>
						<span className="block text-[28px] xl:text-4xl 2xl:text-5xl leading-8">Based in <strong>France.</strong></span>
					</div>
					<p className="text-zinc-500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
					<div className="flex space-x-6">
						<img src="/images/github-icon.svg"/>
						<img src="/images/github-icon.svg"/>
						<img src="/images/get-resume-button.svg" />
					</div>
				</div>

			</section>
			<List isBlack={false} title="Skills" Item={SkillItem} apiUri="skills" ulClassName="grid grid-cols-2 sm:grid-cols-3 max-w-[340px] sm:max-w-[unset] lg:grid-cols-4 xl:grid-cols-5 w-full gap-5 md:gap-8 lg:gap-12 justify-center gap-x-[auto] lg:max-w-[1240px]" />
			<List isBlack={true} title="Experiences" Item={ExperienceItem} apiUri="experiences" ulClassName="w-full space-y-5"/>
			<About/>
			<List isBlack={true} title="Projects" Item={ProjectItem}  apiUri="projects" ulClassName="w-full space-y-5 sm:space-y-8 md:space-y-12 lg:space-y-20 xl:space-y-24 2xl:space-y-28"/>
			<Contact/>
			<Footer/>
		</>
	);
}
