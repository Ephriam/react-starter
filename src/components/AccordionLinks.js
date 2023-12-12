// AccordionLinks.js
import React, { useState } from 'react';
import './AccordionLinks.css'; // Include your custom styles here

const AccordionLinks = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="accordion-links">
      {data.map((item, index) => (
        <li key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
          <div className="accordion-header" onClick={() => handleToggle(index)}>
            {item.title}
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9654;</span>
          </div>
          <ul className="sub-links">
            {item.subLinks.map((subLink, subIndex) => (
              <li key={subIndex}>
                <a href={subLink.url}>{subLink.label}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AccordionLinks;
