import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  return (
    <div className='main-container'>
      <div className='cards-container'>
        <Link to="/video" className='cards'><h1>Devops</h1></Link>
        <Link to="/video" className='cards'><h1>Vlsi</h1></Link>
        <Link to="/video" className='cards'><h1>Cloud Computing</h1></Link>
        <Link to="/video" className='cards'><h1>Redhat</h1></Link>
      </div>
    </div>
  );
}

export default Admin;
