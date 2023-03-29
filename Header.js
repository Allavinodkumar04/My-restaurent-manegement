import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className ='navbar navbar-light big-light'>
                <a className='navbar-barnd'>Resturant</a>
                <button className='btn btn-primary'>
                    Order <span className='badge bg-secondary'>0</span>
                </button>
            </nav>
        </div>
    )
}

export default Header 