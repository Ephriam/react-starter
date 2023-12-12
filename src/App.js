import React, { useState } from 'react';
import './App.css';
import AccordionLinks from './components/AccordionLinks';

const App = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const toggleNav = () => {
    setSideNavOpen(!isSideNavOpen);
  };

  // ... (unchanged code)

return (
  <div className="app-container">
    {/* Navbar */}
    <nav className="navbar">
      <button className="navbar-toggler" onClick={toggleNav}>
        ☰
      </button>
      <span className="navbar-brand mb-0 h1">My React App</span>
    </nav>

    {/* Main Content and Sidebar */}
    <div className="content-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSideNavOpen ? 'open' : ''}`}>
        <AccordionLinks data={accordionData} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to My React App!</h2>
        <p>This is the main content area.</p>
      </div>
    </div>
  </div>
);
// ... (unchanged code)

};

export default App;

const accordionData = [
  {
    title: 'Category 1',
    subLinks: [
      { label: 'Subcategory 1.1', url: '#' },
      { label: 'Subcategory 1.2', url: '#' },
    ],
  },
  {
    title: 'Category 2',
    subLinks: [
      { label: 'Subcategory 2.1', url: '#' },
      { label: 'Subcategory 2.2', url: '#' },
    ],
  },
  // Add more categories as needed
];
