import React from 'react';

function Modal(props) {
	const { openModal, setOpenModal } = props;

	const scrollToSection = (e) => {
        e.preventDefault();
        const sectionID = e.target.getAttribute('href')
        const section = document.getElementById(sectionID);
        if (section) {
          // Calculer la position de la section moins l'offset
          const sectionPosition = section.offsetTop - 70;
    
          setOpenModal(false)
          window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth', // Pour un défilement fluide
          });
        }
    };

	return (
		<>
			<div className={`transition-opacity fixed z-10 bg-black  h-screen inset-0 ${openModal ? "opacity-60  w-screen" : "opacity-0 w-0"}`} onClick={()=>setOpenModal(false)} />
			<div className={`transition-all fixed z-20 w-52 ${openModal ? "right-0" : "right-[-208px]"} h-screen ml-auto inset-0 bg-white`}>
				<ul className='mt-[70px] p-[10px] '>
					<li className='justify-center flex'><a href="about" onClick={scrollToSection} className='w-48 text-center border-b border-zinc-300 py-3'>About</a></li>
					<li className='justify-center flex'><a href="skills" onClick={scrollToSection} className='w-48 text-center border-b border-zinc-300 py-3'>Skills</a></li>
					<li className='justify-center flex'><a href="experiences" onClick={scrollToSection} className='w-48 text-center border-b border-zinc-300 py-3'>Experiences</a></li>
					<li className='justify-center flex'><a href="projects" onClick={scrollToSection} className='w-48 text-center border-b border-zinc-300 py-3'>Projects</a></li>
					<li className='justify-center flex'><a href="contact" onClick={scrollToSection} className='w-48 text-center border-b border-zinc-300 py-3'>Contact</a></li>
				</ul>
			</div>
		</>
	);
}

export default Modal;