import React from 'react';
import { useDispatch, useSelector  } from 'react-redux'

//import classes from './NavBar.module.css'
import logo from '../../../assets/img/temp-logo.jpg'

import { NavLink, Link, Redirect } from 'react-router-dom'

import { getAuthToken } from '../../../store/selectors/selectors';
import { LOGOUT } from '../../../store/reducers/actionTypes';
const NavBar = () => {
    const token = useSelector(getAuthToken)
    const dispatchLogout = useDispatch()

    const logoutHandler = () => {
        dispatchLogout({type: LOGOUT})
    }

    const styleArray = ['navbar','navbar-expand', 'fixed-top']
    return(
        <>
            {!token && <Redirect to="/home"/>}
            <nav className={styleArray.join(" ")} style={{backgroundColor:"#1B1212", width:'100%', alignItems: 'left'}}>
                <div className='navbar-brand' style={{height:'60px', marginBottom:'0.25rem'}}><Link to='/'><img style={{height:'60px', width:'90px'}} src={logo}></img></Link></div>
                <ul style={{marginLeft:'80%'}} className='navbar-nav'>
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
                    <li className={'nav-item'}>
                        {token && <button className="btn btn-outline-light btn-lg m-2" onClick={(e)=>logoutHandler()}>Logout</button>}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;