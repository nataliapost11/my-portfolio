import { useState } from 'react';
import  '../styles/Nav.css';

export default function Nav({ currentPage, handlePageChange }){

    const getNavCss = (pageName)=>{ return currentPage === pageName? 'nav-link active' : 'nav-link'};

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    const menuItemClick = (pageName) =>{
        setHamburgerOpen(false);
        handlePageChange(pageName);
    }

    return(
        <>
            <div className={ hamburgerOpen ? 'navigation navigation-open' : 'navigation'} >
                <ul>
                    <li>
                        <a
                        href="#about"
                        onClick={() => menuItemClick('About')}
                        className={getNavCss('About')}>
                        About Me
                        </a>
                    </li>
                    <li>
                        <a
                        href="#portfolio"
                        onClick={() => menuItemClick('Portfolio')}
                        className={getNavCss('Portfolio')}>
                        Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                        href="#contact"
                        onClick={() => menuItemClick('Contact')}
                        className={getNavCss('Contact')}>
                        Contact
                        </a>
                    </li>
                    <li>
                        <a
                        href="#resume"
                        onClick={() => menuItemClick('Resume')}
                        className={getNavCss('Resume')}>
                        Resume
                        </a>
                    </li>
                </ul>
                <div className={ hamburgerOpen ? 'hamburger hamburger-open' : 'hamburger'} onClick={toggleHamburger}>      
                    <div className="burger burger1" />
                    <div className="burger burger2" />
                    <div className="burger burger3" /> 
                </div>
            </div>
        </>
    )

}