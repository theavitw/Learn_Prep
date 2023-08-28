// Sidebar.js
import React from 'react';
import './Style.css';
import { NavLink } from 'react-router-dom';
    
const navItems = ['Dashboard', 'Schedule', 'Preparation', 'Playback', 'Account'];

const SidebarHeader = () => {
  return <span className="sidebar-header">Learn<span>Prep</span></span>;
};

const SidebarNav = () => {
  return (
    <ul className="sidebar-nav">
      {navItems.map((item, index) => (
        <>
        <NavLink to={item} id = "Navitem"><li key={index}>{item}</li></NavLink>
        
        </>
        
      ))}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarNav />
      

    </div>
  );
};

export default Sidebar;
