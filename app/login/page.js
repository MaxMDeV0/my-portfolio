"use client"

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Admin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password
        });
        if (result.error) {
            setError('Invalid username or password');
        } else {
            router.push('/');
        }
    };    
    
    
    return (
        <section className="px-4 py-20 pt-[110px] min-[450px]:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28 max-w-[800px] m-auto flex h-screen items-center">
            <form onSubmit={handleSubmit} className="space-y-5 box-border lg:flex-1 lg:pr-[3%] xl:pr-[5%]">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <input className="h-14 leading-14 px-6 py-4 w-full border-2 border-zinc-500 rounded" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>
                <button type="submit" className="h-12 w-36 block leading-[3rem] bg-black text-white px-4 rounded !mt-[15px] text-center" >Log In</button>
            </form>
        </section>
    )
}