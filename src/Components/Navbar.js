import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
      <span className='logo'>Amazon Mini</span>
      <div>
        <Link className='navlink'  to='/'>Home</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <span className='cartCount'>Cart items: 0</span>
      </div>
    </div>
  );
}
