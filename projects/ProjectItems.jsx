import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item, onDemoClick }) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt={item.title} />
            <h3 className="project__title">{item.title}</h3>
            <button className="project__button" onClick={() => onDemoClick(item)}>
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </button>
        </div>
    );
}

export default ProjectItems;
