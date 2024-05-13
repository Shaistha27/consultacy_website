import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  return (
    <div className='main-container'>
      <div className='cards-container'>
        <Link to="/devops" className='cards'><h1>devops</h1></Link>
        <Link to="/devops" className='cards'><h1>vlsi</h1></Link>
        <Link to="/devops" className='cards'><h1>cloud computing</h1></Link>
        <Link to="/devops" className='cards'><h1>redhat</h1></Link>
      </div>
    </div>
  );
}

export default Admin;
