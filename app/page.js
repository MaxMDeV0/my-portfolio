"use client";

import ExperienceItem from "./components/ExperienceItem";
import List from "./components/List";
import SkillItem from "./components/SkillItem";
import About from "./components/About";

export default function Home() {
	return (
		<>
			<section className="py-10 px-4 pt-[110px] bg-white">
				<img src='/images/my-portfolio-developper-anaglyph.svg' alt="developer anaglyph"/>
				<div className="mt-12 space-y-12">
					<div className="space-y-3">
						<span className="block text-[28px] leading-8 tracking-tight">Hi, i'am <strong>Maxence Merter.</strong></span>
						<span className="block text-[28px] leading-8 "><strong>Fullstack</strong> Developer</span>
						<span className="block text-[28px] leading-8">Based in <strong>France.</strong></span>
					</div>
					<p className="text-zinc-500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
					<div className="flex space-x-6">
						<img src="/images/github-icon.svg"/>
						<img src="/images/github-icon.svg"/>
						<img src="/images/get-resume-button.svg" />
					</div>
				</div>

			</section>
			<List isBlack={false} title="Skills" Item={SkillItem} ulClassName="grid grid-cols-2 grid-cols-[repeat(2,minmax(0,160px))] gap-5 max-w-[340px] justify-center" />
			<List isBlack={true} title="Experiences" Item={ExperienceItem} ulClassName="w-full space-y-5"/>
			<About/>
		</>
	);
}
