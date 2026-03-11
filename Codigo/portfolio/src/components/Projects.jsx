import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

// ==========================================
// MÁQUINA DE ESTADOS DO CARROSSEL
// ==========================================
const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Se não houver imagens ou for apenas uma, não inicia o loop
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // Fallback de segurança caso o vetor venha vazio
  if (!images || images.length === 0) {
    return (
      <img
        src={`https://via.placeholder.com/600x400/0f0728/38bdf8?text=Sem+Imagem`}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Placeholder"
      />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-black/50 group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/card:opacity-100 transition-opacity duration-300"
          alt={`${altText} - frame ${currentIndex + 1}`}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400/0f0728/38bdf8?text=Erro+na+Imagem`;
          }}
        />
      </AnimatePresence>

      {/* Indicadores de Posição (Dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-4 bg-neon-cyan" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (PROJECTS)
// ==========================================
const Projects = ({ language }) => {
  const projectsData = {
    pt: [
      {
        id: 1,
        title: "Meu Portfólio Profissional",
        description:
          "Website de portfólio desenvolvido com React e Tailwind CSS para apresentar minha trajetória, projetos acadêmicos e habilidades em engenharia de software.",
        tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        github: "https://github.com/karenjoilly11/Meu-Portfolio",
        images: ["/img/portfolio/portfolio-imagem-1.jpeg"],
        alt: "Interface do portfólio de Karen Joilly",
      },
      {
        id: 2,
        title: "Martin Psicólogo - Sistema de Gestão",
        description:
          "Aplicação web para gestão de consultório psicológico com agendamento de consultas e controle financeiro. Desenvolvido em equipe na PUC Minas com metodologias ágeis, integrando back-end robusto com front-end dinâmico.",
        tech: ["React", "Node.js", "Java", "Spring Boot", "MySQL"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-psicologo.git",
        images: [
          "/img/martin-psicologo-ti3/martin-psicologo-image-1.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-2.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-7.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-12.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-11.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-6.jpeg",
        ],
        alt: "Interface do sistema de gestão Martin Psicólogo",
      },
      {
        id: 3,
        title: "GameHub - Plataforma de Jogos",
        description:
          "Plataforma interativa para busca e avaliação de jogos. Sistema com cadastro de usuários, perfis personalizados e avaliações colaborativas. Desenvolvido com Java Spring Boot no backend e frontend integrado.",
        tech: ["Java", "Spring Boot", "MySQL", "React", "TypeScript"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-gamehub",
        images: [
          "/img/gamehub-ti2/gamehub-image-1.jpeg",
          "/img/gamehub-ti2/gamehub-image-3.jpeg",
          "/img/gamehub-ti2/gamehub-image-2.jpeg",
        ],
        alt: "Interface da plataforma de jogos GameHub",
      },
    ],
    en: [
      {
        id: 1,
        title: "My Professional Portfolio",
        description:
          "Portfolio website developed with React and Tailwind CSS to showcase my journey, academic projects, and software engineering skills.",
        tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        github: "https://github.com/karenjoilly11/Meu-Portfolio",
        images: ["/img/portfolio/portfolio-imagem-1.jpeg"],
        alt: "Karen Joilly portfolio interface",
      },
      {
        id: 2,
        title: "Martin Psicólogo - Management System",
        description:
          "Web application for psychology office management with appointment scheduling and financial control. Team project at PUC Minas using agile methodologies, integrating robust back-end with dynamic front-end.",
        tech: ["React", "Node.js", "Java", "Spring Boot", "MySQL"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-psicologo.git",
        images: [
          "/img/martin-psicologo-ti3/martin-psicologo-image-1.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-2.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-7.jpeg",
        ],
        alt: "Martin Psicólogo management system interface",
      },
      {
        id: 3,
        title: "GameHub - Gaming Platform",
        description:
          "Interactive platform for game search and reviews. System with user registration, personalized profiles, and collaborative ratings. Developed with Java Spring Boot backend and integrated frontend.",
        tech: ["Java", "Spring Boot", "MySQL", "React", "TypeScript"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-gamehub",
        images: [
          "/img/gamehub-ti2/gamehub-image-1.jpeg",
          "/img/gamehub-ti2/gamehub-image-3.jpeg",
          "/img/gamehub-ti2/gamehub-image-2.jpeg",
        ],
        alt: "GameHub gaming platform interface",
      },
    ],
  };

  const projects = projectsData[language] || projectsData["pt"];
  const sectionTitle =
    language === "pt" ? "Projetos e Pesquisa." : "Projects & Research.";

  return (
    <section
      id="projetos"
      className="py-24 px-6 relative z-10 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {sectionTitle}
          </h2>
          <div className="w-20 h-1.5 bg-neon-cyan mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <CardContainer key={project.id} className="w-full h-full">
              <CardBody className="bg-black/30 backdrop-blur-md border border-white/10 hover:border-neon-cyan/40 w-full h-full rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 group/card">
                <div>
                  <CardItem
                    translateZ="40"
                    className="text-xl font-bold text-white mb-3"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-slate-300 text-sm mb-5 leading-relaxed"
                  >
                    {project.description}
                  </CardItem>

                  {/* AQUI ESTÁ A INTEGRAÇÃO CORRETA DO CARROSSEL NO EIXO Z */}
                  <CardItem translateZ="80" className="w-full mb-6">
                    <div className="h-44 w-full overflow-hidden rounded-xl border border-white/5 relative">
                      <ImageCarousel
                        images={project.images}
                        altText={project.alt}
                      />
                    </div>
                  </CardItem>
                </div>

                <div className="flex flex-col gap-4">
                  <CardItem translateZ={20} className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono tracking-wider bg-white/5 text-neon-cyan px-2 py-1 rounded-md border border-neon-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>

                  <div className="flex items-center justify-between mt-2">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 text-xs font-bold flex items-center gap-2 transition-all"
                    >
                      <FaGithub size={16} /> GitHub
                    </CardItem>

                    <CardItem translateZ={20}>
                      <Link
                        to="/todos-projetos"
                        className="text-neon-cyan text-xs font-bold flex items-center gap-2 hover:underline group"
                      >
                        {language === "pt" ? "Detalhes" : "Details"}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* BOTÃO VER TODOS */}
        <div className="mt-20 text-center">
          <Link to="/todos-projetos">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-bold rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300"
            >
              {language === "pt"
                ? "Ver Todos os Projetos"
                : "View All Projects"}
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
