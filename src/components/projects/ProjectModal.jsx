import React from 'react';
import { HiX } from "react-icons/hi";

const ProjectModal = ({ project, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal__overlay" onClick={handleOverlayClick}>
            <div className="modal__content">
                <HiX className="modal__close" onClick={onClose} />
                {/* <img className="modal__img" src={project.image} alt={project.title} /> */}
                <h3 className="modal__title">{project.title}</h3>
                <p className="modal__description">{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectModal;
