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
			<div className={`modal-blur ${openModal ? "triggered" : ""}`} onClick={()=>setOpenModal(false)} />
			<div className={`modal ${openModal ? "right" : ""}`}>
				<ul>
					<li><a href="about" onClick={scrollToSection} >About</a></li>
					<li><a href="skills" onClick={scrollToSection} >Skills</a></li>
					<li><a href="experiences" onClick={scrollToSection} >Experiences</a></li>
					<li><a href="projects" onClick={scrollToSection} >Projects</a></li>
					<li><a href="contact" onClick={scrollToSection} >Contact</a></li>
				</ul>
			</div>
		</>
	);
}

export default Modal;