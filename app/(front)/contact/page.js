export default function Contact() {
    return (
        <section className="px-4 py-20 pt-[110px] min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28 max-w-[1440px] m-auto lg:flex lg:h-screen lg:items-center">
            <form className="space-y-5 box-border lg:flex-1 lg:pr-[3%] xl:pr-[5%]">
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="text" placeholder="Your name"/>
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="email" placeholder="Email"/>
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="text" placeholder="Your website(If exists)"/>

                <textarea className="h-36 px-6 py-4 w-full border-2 border-zinc-500 rounded" placeholder="How can i help ?"/>
                <submit className="h-12 w-36 block leading-[3rem] bg-black text-white px-4 rounded !mt-[15px]" >Get in Touch !</submit>

            </form>
            <div className="my-10 space-y-8 lg:flex-1 lg:pl-[3%] xl:pl-[5%]">
                <h3 className="text-[28px] font-extrabold lg:text-4xl 2xl:text-5xl">Let's talk for<br/>Something special</h3>
                <p className="text-zinc-500">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <p className="font-bold text-xl">merter.maxence@gmail.com<br/>0646494169</p>
            </div>
        </section>
    )
}