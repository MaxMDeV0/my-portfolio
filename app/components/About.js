export default function About() {
    return (
        <section className="py-10 px-4 space-y-5 min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
            <div className="max-w-[1240px] m-auto lg:flex">
                <div className="lg:flex lg:flex-1 lg:pr-4">
                    <img src="/images/my-portfolio-man-anaglyph.svg" className="m-auto lg:m-[unset]"/>
                </div>
                <div className="space-y-5 lg:flex-1 lg:pl-4">
                    <h2 className="text-[32px] leading-[72px]">About <strong>Me</strong></h2>
                    <div className="space-y-5 text-zinc-500 tracking-wide ">
                        <p>I&#39;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                        <p>I began my journey as a web developer in 2015, and since then, I&#39;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&#39;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                        <p>When I&#39;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}