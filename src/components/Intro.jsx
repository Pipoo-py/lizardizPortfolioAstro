
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react'
import { theme } from '../stores/themeStore'
import mainLogo from '../assets/firstLogoTransparent.webp'
import mainLogoForDark from '../assets/logoFullWhite.webp'
import "../styles/Intro.css"

export const Intro = () => {
  const currentTheme = useStore(theme);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const imageSrc = currentTheme === "light" ? mainLogo.src : mainLogoForDark.src;

  return (
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
            ¡Hola! Soy Alejandro Salazar, desarrollador fullstack. Transformo ideas en experiencias digitales claras y de alto rendimiento. Construyo interfaces con React, Astro y Svelte, y desarrollo APIs eficientes con Go. ¿Listo para impulsar tu proyecto?
          </p>
          <button className="button-cv">
            <a href="/cv.pdf" download="Alejandro_Salazar_CV">Descarga mi CV</a>
          </button>
        </div>
      </div>
    </main>
  )
}
