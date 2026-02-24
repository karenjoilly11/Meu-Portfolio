import { motion } from 'framer-motion';

const Experience = ({ language }) => {
  const experienceData = {
    pt: [
      {
        id: 1,
        role: "Desenvolvedor & Líder de Equipe",
        company: "Laboratório LIM",
        period: "Outubro 2025 - Presente",
        description: "Atuação focada no desenvolvimento de um projeto de software voltado para a gestão de estágios universitários, aplicando princípios de liderança de times e Engenharia de Requisitos."
      },
      {
        id: 2,
        role: "Gestor de Projetos (Hackathon)",
        company: "PUC Minas",
        period: "Junho 2025",
        description: "Responsável pelo gerenciamento de projetos e coordenação de equipes durante a maratona de desenvolvimento, garantindo a organização do ciclo de vida da aplicação e a entrega do MVP."
      }
    ],
    en: [
      {
        id: 1,
        role: "Developer & Team Lead",
        company: "LIM Laboratory",
        period: "October 2025 - Present",
        description: "Focused on developing a software project aimed at university internship management, applying team leadership principles and Requirements Engineering."
      },
      {
        id: 2,
        role: "Project Manager (Hackathon)",
        company: "PUC Minas",
        period: "June 2025",
        description: "Responsible for project management and team coordination during the development marathon, ensuring application lifecycle organization and MVP delivery."
      }
    ]
  };

  const experiences = experienceData[language];
  const title = language === 'pt' ? 'Experiência.' : 'Experience.';

  return (
    <section id="experiencias" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
        >
          {title}
        </motion.h2>
        
        {/* A Linha do Tempo contínua e minimalista */}
        <div className="space-y-16 border-l border-white/10 ml-3 md:ml-0 pl-8 md:pl-12 relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* O Nó Luminoso da Linha do Tempo */}
              <div className="absolute w-4 h-4 rounded-full bg-cosmic-dark border-2 border-neon-cyan -left-[39px] md:-left-[57px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-150 group-hover:bg-neon-cyan transition-all duration-300"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-white transition-colors">
                {exp.role}
              </h3>
              
              <div className="flex flex-wrap items-center gap-2 mt-2 mb-4 font-medium">
                <span className="text-neon-purple text-lg">{exp.company}</span>
                <span className="text-slate-600 hidden md:inline">|</span>
                <span className="text-neon-cyan/80 text-sm tracking-widest uppercase">{exp.period}</span>
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-2xl font-light text-lg">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;