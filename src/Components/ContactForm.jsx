import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l49uuhg",       // Service ID
        "template_4jd6g88",      // Template ID
        form.current,
        "FX75Spxjbw0KwQn0y"     // Public Key
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
      }}
      className="w-full sm:w-[60%] h-full bg-grayscale rounded-xl pt-10 pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Tem uma ideia?", "Vamos trabalhar juntos!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">Nome</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Digite seu nome"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">Sobrenome</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Digite seu sobrenome"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Digite seu e-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Mensagem</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Digite sua mensagem..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? 'Enviar' : 'Enviado!'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
