import React, { useEffect } from 'react';

function Modal(props) {
	const {closeModal, triggerAnimation, setTrigerAnimation} = props;

	useEffect(()=>{
		setTrigerAnimation(true);
	},[])

	return (
		<>
			<div className={`transition-opacity fixed z-10 bg-black  h-screen inset-0 w-screen ${triggerAnimation ? "opacity-60" : "opacity-0"}`} onClick={closeModal} />
			<div className={`transition-all fixed z-20 ${triggerAnimation ? "w-52" : "w-0"} h-screen ml-auto inset-0 bg-white`}>
				<ul className='mt-[70px] p-[10px] '>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/'>Home</a></li>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/projects'>Projects</a></li>
					<li className='justify-center flex'><a className='w-48 text-center border-b border-zinc-300 py-3' href='/contact'>Contact</a></li>
				</ul>
			</div>
		</>
	);
}

export default Modal;