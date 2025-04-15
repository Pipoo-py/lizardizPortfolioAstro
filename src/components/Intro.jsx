
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
              Hola, soy Alejandro Salazar Lizardiz. Transformo ideas complejas en experiencias digitales claras, rápidas y efectivas. Como Desarrollador Frontend, me especializo en construir interfaces modernas con React que no solo lucen bien, sino que resuelven problemas reales y conectan con los usuarios. ¿Te intriga ver cómo el código limpio y el diseño centrado en el usuario pueden impulsar tu proyecto? Explora mis trabajos a continuación o hablemos de tu visión.
            </p>
          </div>
      </div>
    </main>
  )
}
