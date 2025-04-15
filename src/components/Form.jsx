import { useForm, ValidationError } from '@formspree/react';
import "../styles/Form.css";

export const Form = () => {
  const [state, handleSubmit] = useForm("mzzeobbz");

  if (state.succeeded) {
      return (
         <section className="form-section">
          <h4 className="thanks-title"> ¡Gracias! </h4>
          <p className="thanks-p"> Tu mensaje ha sido enviado correctamente, será respondido próximamente.</p>
         </section>
      );
  }

  return (
    <section className="form-section" id="form">
      <h2 className="form-section__title">
        Contacto
      </h2>
      <div className="form-section__container">
        <form onSubmit={handleSubmit} id="contacto-form" className="form-section__form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              required
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
              className="validation-error" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            
            <ValidationError
              prefix="Correo Electrónico"
              field="email"
              errors={state.errors}
              className="validation-error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje" 
              rows="5"
              required
            ></textarea>
            
            <ValidationError
              prefix="Mensaje"
              field="mensaje"
              errors={state.errors}
              className="validation-error"
            />
          </div>

          
           <ValidationError
              errors={state.errors}
              className="validation-error general-error" 
           />

         
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
