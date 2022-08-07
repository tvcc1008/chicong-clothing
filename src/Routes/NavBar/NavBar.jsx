import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './styles.scss'

import { ReactComponent as CrwnLogo } from '../../components/assets/083 crown.svg'

const NavBar = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGNIN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar