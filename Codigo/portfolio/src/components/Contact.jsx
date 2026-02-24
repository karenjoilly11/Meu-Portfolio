import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ language }) => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const content = {
    pt: {
      tagline: "Vamos conversar",
      title: "Transforme sua ideia em realidade digital.",
      description: "Estou disponível para projetos freelance, colaborações ou oportunidades de carreira. Envie uma mensagem e vamos discutir como posso agregar valor ao seu time.",
      nameLabel: "Seu Nome",
      emailLabel: "Seu E-mail",
      messageLabel: "Sua Mensagem",
      buttonText: "Enviar Mensagem",
      loadingText: "Enviando...",
      successMsg: "Mensagem enviada com sucesso!",
      errorMsg: "Erro ao enviar. Tente novamente."
    },
    en: {
      tagline: "Let's connect",
      title: "Turn your idea into digital reality.",
      description: "I am available for freelance projects, collaborations, or career opportunities. Send a message and let's discuss how I can add value to your team.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Your Message",
      buttonText: "Send Message",
      loadingText: "Sending...",
      successMsg: "Message sent successfully!",
      errorMsg: "Error sending. Please try again."
    }
  };

  const text = content[language];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Lembre-se de colocar suas chaves do EmailJS aqui
    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', form.current, 'SUA_PUBLIC_KEY')
    .then(() => { setStatus('success'); e.target.reset(); }, () => { setStatus('error'); });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/seu-linkedin", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/seu-github", label: "GitHub" },
    { icon: FaWhatsapp, href: "https://wa.me/5531999999999", label: "WhatsApp" },
    { icon: FaEnvelope, href: "mailto:contato@luizfernando.dev", label: "Email" },
  ];

  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden">
      {/* Luz de fundo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Textos e Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-neon-cyan font-semibold tracking-wider uppercase mb-4 block">{text.tagline}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{text.title}</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">{text.description}</p>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 flex items-center justify-center rounded-xl bg-cosmic-light/50 border border-white/10 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Coluna da Direita: Formulário Clean */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail} className="bg-cosmic-light/30 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative z-10">
            <div className="space-y-5">
              <div>
                <label className="text-slate-400 text-sm font-medium mb-2 block">{text.nameLabel}</label>
                <input type="text" name="user_name" required className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-neon-cyan/50 transition-all" />
              </div>
              <div>
                <label className="text-slate-400 text-sm font-medium mb-2 block">{text.emailLabel}</label>
                <input type="email" name="user_email" required className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-neon-cyan/50 transition-all" />
              </div>
              <div>
                <label className="text-slate-400 text-sm font-medium mb-2 block">{text.messageLabel}</label>
                <textarea name="message" rows="4" required className="w-full bg-cosmic-dark/50 border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-neon-cyan/50 transition-all resize-none"></textarea>
              </div>
              
              <button type="submit" disabled={status === 'loading'} 
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold py-4 px-8 rounded-xl transition-all hover:opacity-90 disabled:opacity-50 mt-2 shadow-lg hover:shadow-neon-cyan/25">
                {status === 'loading' ? text.loadingText : text.buttonText}
              </button>
              {status === 'success' && <p className="text-emerald-400 text-center mt-3">{text.successMsg}</p>}
              {status === 'error' && <p className="text-red-400 text-center mt-3">{text.errorMsg}</p>}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;