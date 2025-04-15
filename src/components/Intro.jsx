
import { useState, useEffect } from 'react'; 
import { useStore } from '@nanostores/react'
import { theme } from '../stores/themeStore' 
import mainLogo from '../assets/firstLogoTransparent.webp'
import mainLogoForDark from '../assets/logoFullWhite.webp'
import "../styles/Intro.css" 

export const Intro = ()=>{
  const currentTheme = useStore(theme); 
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); 
  }, []);

  const imageSrc = currentTheme === "light" ? mainLogo.src : mainLogoForDark.src;

  return(
    <main className="main">
      <div className="main__container">
          <div className="main__info-container">
            <div className="main__img-container">
              <img 
                className="main__img" 
                style={{ visibility: hasMounted ? 'visible' : 'hidden' }} 
                src={imageSrc}
                alt="Logo principal de LizardizNexus"
              />
            </div>
            <p className="main__p">
               ¡Hola! Soy Alejandro Salazar Lizardiz, Desarrollador Frontend especializado en transformar ideas complejas en experiencias digitales claras y efectivas. Construyo interfaces modernas con React y Astro, centradas en el usuario y la resolución de problemas. ¿Quieres ver cómo el código limpio y el diseño pueden impulsar tu proyecto? Explora mis trabajos o hablemos de tu visión.
            </p>
          </div>
      </div>
    </main>
  )
}
