import { motion } from 'framer-motion';

const About = ({ language }) => {
  const content = {
    pt: {
      title: "Sobre Mim.",
      description: "Sou estudante do 4º período de Engenharia de Software na PUC Minas e Desenvolvedor Full Stack.",
      focus: "Minha trajetória é focada em projetar arquiteturas eficientes e construir soluções escaláveis de ponta a ponta. Tecnicamente, atuo com domínio do ecossistema Java e Spring Boot no back-end, integrando bancos de dados relacionais com interfaces modernas, tipadas e reativas construídas em React, TypeScript e Next.js.",
      goals: "Acredito que o rigor analítico e matemático — princípios que aplico diariamente em Cálculo e Algoritmos — é fundamental para a criação de sistemas limpos e manuteníveis."
    },
    en: {
      title: "About Me.",
      description: "I am a 4th-period Software Engineering student at PUC Minas and a Full Stack Developer.",
      focus: "My journey is focused on designing efficient architectures and building scalable end-to-end solutions. Technically, I work with the Java and Spring Boot ecosystem on the back-end, integrating relational databases with modern, strongly-typed, and reactive interfaces built in React, TypeScript, and Next.js.",
      goals: "I believe that analytical and mathematical rigor—principles I apply daily in Calculus and Algorithms courses—is fundamental for creating clean, maintainable systems."
    }
  };

  const text = content[language];

  return (
    <section id="sobre" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Lado Esquerdo: Título e Ancoragem Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {text.title}
            </h2>
            {/* Linha neon suave para dar estrutura sem criar uma caixa */}
            <div className="w-20 h-1 bg-neon-cyan rounded-full mb-8 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          </motion.div>

          {/* Lado Direito: Texto fluido e sem caixas */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/3 space-y-8 text-lg text-slate-400 font-light leading-relaxed"
          >
            <p className="text-2xl text-slate-200 font-medium leading-snug">
              {text.description}
            </p>
            <p>
              {text.focus}
            </p>
            
            {/* Citação em destaque orgânico */}
            <div className="pl-6 border-l-2 border-neon-purple/50 relative mt-8">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
              <p className="italic text-slate-300">
                "{text.goals}"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;