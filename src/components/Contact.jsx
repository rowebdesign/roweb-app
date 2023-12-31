import React, {useState} from "react";
import "../css/contact.css";



const Contact = (props) => {

    console.log(props);
    

    const initialStateValues= {
        nombre:"",
        email:"",
        mensaje:"",
    };

    const [values, setValues] = useState(initialStateValues);
    const [message, setMessage] = useState(false);

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        // console.log(name,value);
        setValues({...values, [name]: value}); //destructuring
        // console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values);
        props.addMessage(values);
        setMessage(true);
    }


    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contacto</h2>
            <span className="section__subtitle">Ponte en contacto conmigo!</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Teléfono</h3>
                            <span className="contact__subtitle">+34 722 72 65 61</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">info@rowebdesign.es</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-location-point contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Localización</h3>
                            <span className="contact__subtitle"> España | Sevilla </span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Nombre</label>
                            <input type="text" className="contact__input" name="nombre" onChange={handleInputChange}/>
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" className="contact__input" name="email" onChange={handleInputChange} />
                        </div>
                        <div className="contact__content message__content">
                            <label htmlFor="" className="contact__label">Mensaje</label>
                            <textarea id="" cols="30" rows="10" name="mensaje" className="contact__input" onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="button button--flex contact__button">Enviar mensaje <i className="uil uil-message button__icon"></i></button>
                    </div>
                    <div className={message ? "message__active": "message__hidden"}>
                        <p className="message__sent"><i className="uil uil-check-circle"></i> Mensaje enviado con éxito</p>
                    </div>
                </form>
                
            </div>
        </section>
    )
}

export default Contact 