import React , { useContext } from 'react';

// icons
import { HiSun , HiMoon} from 'react-icons/hi';
import geoman from "../assets/icons/geoman-logo.svg";

// styles
import { NavContainer } from '../Styles/Custom/Nav';

// import context
import { ThemeContext } from '../Context/ThemeContextProvider';

const Nav = () => {

    const {mode , handleMode} = useContext(ThemeContext);

    return (
        <NavContainer>
            <section className='nav__left'>
                <img className='nav__logo' alt='geoman' src={geoman}/>
                <h2 className='nav__title'>Geoman.io</h2>
            </section>
            <section className='nav__right' onClick={handleMode}>
                {mode === 'light' 
                ? <HiMoon className='nav__icon'/>
                : <HiSun className='nav__icon'/>
                }
                
            </section>
        </NavContainer>
    );
};

export default Nav;