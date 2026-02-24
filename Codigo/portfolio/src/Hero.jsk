import { motion } from 'framer-motion';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = ({ language }) => {
  const content = {
    pt: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Full Stack | Java & React",
      description: "Construindo soluções robustas de ponta a ponta, desde APIs escaláveis até interfaces dinâmicas e centradas no usuário.",
      btnProjects: "Ver Projetos",
      btnContact: "Contato"
    },
    en: {
      greeting: "Hello, I am",
      role: "Full Stack Developer | Java & React",
      description: "Building robust end-to-end solutions, from scalable APIs to dynamic, user-centric interfaces.",
      btnProjects: "View Projects",
      btnContact: "Contact"
    }
  };

  const text = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      
      {/* Fundo Aceternity: Grade Cibernética Ultra Leve */}
      <div className="absolute inset-0 w-full h-full bg-cosmic-dark flex items-center justify-center bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_32px]">
        <div className="absolute inset-0 bg-cosmic-dark [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,transparent_20%,black_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Textos (Corrigida para y e whileInView) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-neon-cyan font-semibold text-lg mb-2 tracking-wide">{text.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Luiz Fernando
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
            {text.role}
          </h2>
          
          <TextGenerateEffect 
            words={text.description} 
            className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projetos" className="bg-neon-cyan text-cosmic-dark px-8 py-3 rounded-lg font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              {text.btnProjects}
            </a>
            <a href="#contato" className="border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/5 transition-all transform hover:-translate-y-1 backdrop-blur-sm">
              {text.btnContact}
            </a>
          </div>
        </motion.div>

        {/* Coluna da Direita: Foto com efeito Neon (Corrigida para y e whileInView) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full opacity-30 animate-pulse scale-105"></div>
            
            <div className="relative w-full h-full rounded-full p-1 border-2 border-white/10 bg-cosmic-light z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://via.placeholder.com/400x400/0f0728/22d3ee?text=Sua+Foto+Aqui" 
                alt="Luiz Fernando" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
