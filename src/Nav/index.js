import React from 'react';


const NavItem = ({ onClick, children }) => 
    <a href="#" onClick={ onClick }><li>{ children }</li></a>

const Nav = () =>
    <nav>
        <ul>
            <NavItem onClick={ () => {console.log('clicked')} }>To Dos</NavItem>
            <NavItem onClick={ () => {console.log('clicked')} }>Profile</NavItem>
            <NavItem onClick={ () => {console.log('clicked')} }>Logout</NavItem>
        </ul>
    </nav>


export default Nav;