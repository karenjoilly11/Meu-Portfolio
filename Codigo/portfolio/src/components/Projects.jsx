import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const Projects = ({ language }) => {
  const projectsData = {
    pt: [
      {
        id: 1,
        title: "Loja de Joias (E-commerce)",
        description: "Aplicação web completa de e-commerce com API RESTful robusta e interface reativa.",
        tech: ["Java", "Spring Boot", "Next.js", "TypeScript"],
        github: "https://github.com/seu-usuario/loja-joias",
        image: "https://via.placeholder.com/600x300/0f0728/38bdf8?text=Jewelry+Store+UI"
      },
      {
        id: 2,
        title: "Projeto Re.use",
        description: "Sistema de sustentabilidade. Arquitetura de back-end e modelagem de banco de dados relacional.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        github: "https://github.com/seu-usuario/re-use",
        image: "https://via.placeholder.com/600x300/0f0728/38bdf8?text=Re.use+Platform"
      }
    ],
    en: [
      {
        id: 1,
        title: "Jewelry Store (E-commerce)",
        description: "Full e-commerce web application with robust RESTful API and reactive interface.",
        tech: ["Java", "Spring Boot", "Next.js", "TypeScript"],
        github: "https://github.com/seu-usuario/loja-joias",
        image: "https://via.placeholder.com/600x300/0f0728/38bdf8?text=Jewelry+Store+UI"
      },
      {
        id: 2,
        title: "Re.use Project",
        description: "Sustainability system. Back-end architecture and relational database modeling.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
        github: "https://github.com/seu-usuario/re-use",
        image: "https://via.placeholder.com/600x300/0f0728/38bdf8?text=Re.use+Platform"
      }
    ]
  };

  const projects = projectsData[language];
  const sectionTitle = language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects';

  return (
    <section id="projetos" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
        >
          {sectionTitle}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var w-full">
              <CardBody className="bg-cosmic-light/30 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neon-cyan/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                
                {/* Título flutuando em 3D (translateZ=50) */}
                <CardItem translateZ="50" className="text-xl font-bold text-white mb-2">
                  {project.title}
                </CardItem>
                
                {/* Descrição flutuando menos (translateZ=60) */}
                <CardItem as="p" translateZ="60" className="text-slate-300 text-sm max-w-sm mt-2 mb-4 leading-relaxed">
                  {project.description}
                </CardItem>
                
                {/* Imagem saltando para fora (translateZ=100) */}
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <img
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/5"
                    alt={project.title}
                  />
                </CardItem>
                
                <div className="flex justify-between items-center mt-4">
                  {/* Tecnologias flutuando (translateZ=20) */}
                  <CardItem translateZ={20} className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-[10px] font-medium bg-neon-purple/20 text-neon-purple px-2 py-1 rounded-full border border-neon-purple/30">
                        {tech}
                      </span>
                    ))}
                  </CardItem>
                  
                  {/* Botão também flutuando (translateZ=20) */}
                  <CardItem translateZ={20} as="a" href={project.github} target="_blank"
                    className="px-4 py-2 rounded-lg bg-white text-cosmic-dark text-xs font-bold flex items-center gap-2 hover:bg-neon-cyan hover:text-white transition-colors shadow-md">
                    <FaGithub /> GitHub
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;