import React from 'react';

const Sidenav = ({ isOpen }) => {
  return (
    <div id="side-nav-container" className={isOpen ? 'nav-open' : ''}>
      <div id="slide-out" className="side-nav">
        <a href="#">
          <img src="imgs/res-logo.png" alt="Logo" height="30" />
        </a>

        <a href="#">Home</a>
        <div className="accordion" id="accordionLink1">
          <a className="accordion-toggle" data-toggle="collapse" href="#collapseLink1">
            Link 1 <i className="fas fa-chevron-right float-right"></i>
          </a>
          <div id="collapseLink1" className="collapse" data-parent="#accordionLink1">
            <a href="#" className="sublink">
              Sublink 1
            </a>
            <a href="#" className="sublink">
              Sublink 2
            </a>
            <a href="#" className="sublink">
              Sublink 3
            </a>
          </div>
        </div>

        <div className="accordion" id="accordionLink2">
          <a className="accordion-toggle" data-toggle="collapse">
            Link 2 <i className="fas fa-chevron-right float-right"></i>
          </a>
          <div id="collapseLink2" className="collapse">
            <a href="#" className="sublink">
              Sublink 4
            </a>
            <a href="#" className="sublink">
              Sublink 5
            </a>
            <a href="#" className="sublink">
              Sublink 6
            </a>
          </div>
        </div>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
      </div>
    </div>
  );
};

export default Sidenav;
