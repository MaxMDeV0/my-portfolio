import { useState } from "react";

export default function Contact() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState({});

    const  formHandler = async () => {
        try{
            const response = await fetch('/api/email', {
                method:"POST",
                body: JSON.stringify({
                    email:email,
                    content:content,
                    website:website,
                    name:name,
                })
            })
            if(!response.ok){
                let errorsObj = {}
                if( email == "" ){
                    errorsObj.email = "Error"
                }
                if( name == "" ){
                    errorsObj.name = "Error"

                }
                if( content == "" ){
                    errorsObj.content = "Error"

                }
                setErrors(errorsObj)
            }else {
                setErrors({})
                setEmail('')
                setContent('')
                setWebsite('')
                setName('')
            }
        }catch(err) {
            setErrors({unknown : "Error"})
        }
    }
    return (
        <section id="contact" >
            <h2 className={`h-[4.5rem] text-center leading-[4.5rem] text-[1.75rem] lg:text-4xl lg:leading-[5.25rem] lg:h-[5.25rem] xl:text-5xl xl:leading-[6rem] xl:h-[6rem]`}>Contact <strong>Me</strong></h2>
            <div className="lg:flex">
                <form className="space-y-5 box-border lg:flex-1 lg:pr-[3%] xl:pr-[5%]" action={formHandler}>
                {!(Object.keys(errors).length === 0) && !errors.unknown && <p style={{ color: 'red' }}>Missing Fields</p>}

                {!!errors.unknown && <p style={{ color: 'red' }}>Unknown error try again !</p>}

                    <input value={name} onChange={(e)=>setName(e.target.value)} className={`big-input ${!errors.name ? "" : "red-border"}`} type="text" placeholder="Your name *"/>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className={`big-input ${!errors.email ? "" : "red-border"}`} type="email" placeholder="Email *"/>
                    <input value={website} onChange={(e)=>setWebsite(e.target.value)} className="big-input" type="text" placeholder="Your website(If exists)"/>

                    <textarea value={content} onChange={(e)=>setContent(e.target.value)} className={`big-input texta ${!errors.content ? "" : "red-border"}`} placeholder="How can i help ? *"/>
                    <button type="submit" className="h-12 w-36 block leading-[3rem] bg-black text-white px-4 rounded !mt-[15px]" >Get in Touch !</button>

                </form>
                <div className="mt-10 space-y-8 lg:flex-1 lg:pl-[3%] xl:pl-[5%]">
                    <h3 className="text-[28px] font-extrabold lg:text-4xl 2xl:text-5xl">Let&#39;s talk for<br/>Something special</h3>
                    <p className="text-zinc-500">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <p className="font-bold text-xl">merter.maxence@gmail.com<br/>0646494169</p>
                </div>

            </div>
        </section>
    )
}