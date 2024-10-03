import "../globals.css";

export default function Contact() {
    return (
        <section className="px-7 py-20 pt-[110px]">
            <form className="space-y-5 box-border">
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="text" placeholder="Your name"/>
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="email" placeholder="Email"/>
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="text" placeholder="Your website(If exists)"/>

                <textarea className="h-36 px-6 py-4 w-full border-2 border-zinc-500 rounded" placeholder="How can i help ?"/>
                <submit className="h-12 w-36 block leading-[3rem] bg-black text-white px-4 rounded !mt-[15px]" >Get in Touch !</submit>

            </form>
        </section>
    )
}