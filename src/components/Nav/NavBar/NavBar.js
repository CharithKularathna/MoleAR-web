import React from 'react';
//import classes from './NavBar.module.css'
import logo from '../../../assets/img/temp-logo.jpg'
import { Link } from 'react-router-dom'
const navBar = () => {
    const styleArray = ['navbar','navbar-expand', 'fixed-top']
    return(
        <>
            <nav className={styleArray.join(" ")} style={{backgroundColor:"#1B1212", width:'100%', alignItems: 'left'}}>
                <div className='navbar-brand' style={{height:'60px', marginBottom:'0.25rem'}}><Link to='/'><img style={{height:'60px', width:'90px'}} src={logo}></img></Link></div>
                <ul className='navbar-nav'>
                    {/*
                    <li className={'nav-item'}>
                        <NavLink activeClassName={classes.active} className='nav-link' exact to='/'>Home</NavLink>
                    </li>
                    {(!props.isAuthenticated) ? <li className={'nav-item'}>
                        <NavLink activeClassName={classes.active} className='nav-link' exact to='/schedule'>Bus Schedule</NavLink>
                    </li> : null}
                    <li className={'nav-item'}>
                        <NavLink activeClassName={classes.active} className='nav-link' exact to='/about'>About Us</NavLink>
                    </li>
                    {logoutLink}
                    */}
                </ul>
            </nav>
        </>
    )
}

export default navBar;