import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useStore } from '@nanostores/react';
import { theme, setTheme, toggleTheme } from '../stores/themeStore';
import '../styles/Navbar.css'; 
import miniLogoLight from '../assets/logoSmall.webp'; 
import miniLogoDark from '../assets/logoSmallDark.webp';

export const Navbar = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navSectionsRef = useRef(null);

  const currentTheme = useStore(theme);

  const openMobileNav = () => {
    const navSectionsContainer = document.querySelector(".nav__sections-container");
      if(mobileIsOpen){
        setMobileIsOpen(false);
        setIsClosing(true);
        setTimeout(()=>{
        if (navSectionsContainer) {
          navSectionsContainer.style.display = "none";
        }
      }, 300);
    }
    else{
    if (navSectionsContainer) {
        navSectionsContainer.style.display = "block";
      }
    setIsClosing(false);
    setMobileIsOpen(true);
  }
}

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = !storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialClientTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');
      if (initialClientTheme !== theme.get()) {
          setTheme(initialClientTheme); 
      }
    }, []); 

  return (
    <nav className={`nav ${currentTheme}`}>
      <div className="nav__container">
        <div className="nav__logo-container">
          <img 
            src={currentTheme === "light" ? miniLogoLight.src : miniLogoDark.src}
            alt="Logo de Lizardiz Nexus en versión miniatura"
          />
        </div>

          <div 
            ref={navSectionsRef}
            className={`nav__sections-container ${mobileIsOpen ? "isOpen" : ""} ${isClosing ? "isClosing" : ""}`}
          >
            <ul className="nav__sections-ul">
              <li className="nav__ul-li"> <a href="#projects" onClick={openMobileNav}> Proyectos</a> </li>
              <li className="nav__ul-li"> <a href="#about" onClick={openMobileNav}> Sobre mi</a> </li>
              <li className="nav__ul-li"> <a href="#skills" onClick={openMobileNav}> Habilidades</a> </li>
              <li className="nav__ul-li"> <a href="#form" onClick={openMobileNav}> Contacto</a> </li>
              <li className="nav__ul-li"> <a href="https://lizardiznexusblog.netlify.app/" onClick={openMobileNav} target="blank"> Blog</a> </li>
              <li className="nav__ul-li li-theme" onClick={toggleTheme}>
                {currentTheme === "light" ? <Moon /> : <Sun />}
              </li>
            </ul>
          </div>

        <button className="nav__button-mobile" onClick={openMobileNav} aria-label="Boton menú">
          {mobileIsOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};
