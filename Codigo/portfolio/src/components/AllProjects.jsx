import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaSearch,
  FaArrowLeft,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

// ==========================================
// MÁQUINA DE ESTADOS DO CARROSSEL
// ==========================================
const ImageCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <img
        src="https://via.placeholder.com/600x400/0f0728/38bdf8?text=Sem+Imagem"
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
            e.target.src = `https://via.placeholder.com/600x400/0f0728/38bdf8?text=Erro`;
          }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-4 bg-neon-cyan" : "w-1.5 bg-white/40"}`}
            />
          ))}
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (GALERIA)
// ==========================================
const AllProjects = ({ language }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Dicionário de Ícones Atualizado
  const techIcons = {
    React: <FaReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    Python: <FaPython className="text-[#3776AB]" />,
    "Node.js": <FaNodeJs className="text-[#339933]" />,
    Java: <FaJava className="text-[#007396]" />,
    "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
    MySQL: <SiMysql className="text-[#4479A1]" />,
    Docker: <FaDocker className="text-[#2496ED]" />,
    JS: <SiJavascript className="text-[#F7DF1E]" />,
  };

  // Matriz de Dados Bilíngue com Categorias
  const allProjectsData = {
    pt: [
      {
        id: 1,
        title: "Meu Portfólio Profissional",
        category: "front",
        description:
          "Website de portfólio desenvolvido com React e Tailwind CSS para apresentar minha trajetória e projetos.",
        tech: ["React", "TypeScript", "Next.js"],
        github: "https://github.com/karenjoilly11/Meu-Portfolio",
        images: ["/img/portfolio/portfolio-imagem-1.jpeg"],
      },
      {
        id: 2,
        title: "Martin Psicólogo - Sistema de Gestão",
        category: "full",
        description:
          "Aplicação web para gestão de consultório psicológico com agendamento de consultas e controle financeiro. Desenvolvido em equipe na PUC Minas com metodologias ágeis.",
        tech: ["React", "Node.js", "Java", "Spring Boot", "MySQL"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-psicologo.git",
        images: [
          "/img/martin-psicologo-ti3/martin-psicologo-image-1.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-2.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-7.jpeg",
        ],
      },
      {
        id: 3,
        title: "GameHub - Plataforma de Jogos",
        category: "full",
        description:
          "Plataforma interativa para busca e avaliação de jogos. Sistema com cadastro de usuários, perfis personalizados e avaliações colaborativas. Desenvolvido com Java Spring Boot no backend e frontend integrado.",
        tech: ["Java", "Spring Boot", "MySQL", "React", "TypeScript"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-gamehub",
        images: [
          "/img/gamehub-ti2/gamehub-image-1.jpeg",
          "/img/gamehub-ti2/gamehub-image-3.jpeg",
          "/img/gamehub-ti2/gamehub-image-2.jpeg",
          "/img/gamehub-ti2/gamehub-image-4.jpeg",
          "/img/gamehub-ti2/gamehub-image-5.jpeg",
        ],
      },
      {
        id: 4,
        title: "Kitty Love - Gestão de Clínicas Felinas",
        category: "front",
        description:
          "Aplicação web desenvolvida no 1º período de Engenharia de Software para gestão de clínicas de gatos. O sistema oferece funcionalidades para disseminação de informações sobre bem-estar felino, cadastro de pacientes e agendamento de consultas, buscando solucionar problemas reais do dia a dia de clínicas veterinárias especializadas.",
        tech: ["JS", "HTML", "CSS"],
        github: "https://github.com/karenjoilly11/kitty-love",
        images: [
          "/img/kitty-love-t1/kittylove-image-1.jpeg",
          "/img/kitty-love-t1/kittylove-image-2.jpeg",
          "/img/kitty-love-t1/kittylove-image-3.jpeg",
        ],
      },
      {
      id: 5,
  title: "Build City Eco - Simulador de Gestão Urbana",
  description:
    "Jogo de simulação e estratégia desenvolvido na FUNEC, onde o jogador atua como prefeito de uma cidade com o desafio de equilibrar crescimento urbano, saúde pública e sustentabilidade. Através de um sistema de perguntas e respostas, o jogador toma decisões que impactam diretamente os níveis de poluição, a qualidade de vida da população e os recursos financeiros da cidade. O objetivo é construir uma cidade mais verde, consciente e eficiente.",
  tech: ["Construct 2D", "Lógica de Programação", "Sustentabilidade"],

  images: [
    "/img/telluris/telluris-image-1.png",
    "/img/telluris/telluris-image-2.png",
    "/img/telluris/telluris-image-3.pgn",
  ],
  alt: "Interface do jogo Build City Eco mostrando problemas urbanos",
},
    ],
    en: [
      {
        id: 1,
        title: "My Professional Portfolio",
        category: "front",
        description:
          "Portfolio website built with React and Tailwind CSS to showcase my journey and projects.",
        tech: ["React", "TypeScript", "Next.js"],
        github: "https://github.com/karenjoilly11/Meu-Portfolio",
        images: ["/img/portfolio/portfolio-imagem-1.jpeg"],
      },
      {
        id: 2,
        title: "Martin Psicólogo - Management System",
        category: "full",
        description:
          "Web application for psychology office management with appointment scheduling and financial control. Team project at PUC Minas using agile methodologies.",
        tech: ["React", "Node.js", "Java", "Spring Boot", "MySQL"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-psicologo.git",
        images: [
          "/img/martin-psicologo-ti3/martin-psicologo-image-1.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-2.jpeg",
          "/img/martin-psicologo-ti3/martin-psicologo-image-7.jpeg",
        ],
      },

      {
        id: 3,
        title: "GameHub - Gaming Platform",
        category: "full",
        description:
          "Interactive platform for game search and reviews. System with user registration, personalized profiles, and collaborative ratings. Built with Java Spring Boot backend and integrated frontend.",
        tech: ["Java", "Spring Boot", "MySQL", "React", "TypeScript"],
        github:
          "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9545100-gamehub",
        images: [
          "/img/gamehub-ti2/gamehub-image-1.jpeg",
          "/img/gamehub-ti2/gamehub-image-3.jpeg",
          "/img/gamehub-ti2/gamehub-image-2.jpeg",
          "/img/gamehub-ti2/gamehub-image-4.jpeg",
          "/img/gamehub-ti2/gamehub-image-5.jpeg",
        ],
      },
      {
        id: 4,
        title: "Kitty Love - Feline Clinic Management",
        category: "front",
        description:
          "Web application developed in the 1st semester of Software Engineering for cat clinic management. The system offers features for disseminating information about feline well-being, patient registration, and appointment scheduling, aiming to solve real-world problems of specialized veterinary clinics.",
        tech: ["JS", "HTML", "CSS"],
        github: "https://github.com/karenjoilly11/kitty-love",
        images: [
          "/img/kitty-love-t1/kittylove-image-1.jpeg",
          "/img/kitty-love-t1/kittylove-image-2.jpeg",
          "/img/kitty-love-t1/kittylove-image-3.jpeg",
        ],
      },
        
        {
  id: 5,
  title: "Build City Eco - Urban Management Simulator",
  description:
    "A simulation and strategy game developed at FUNEC, where the player acts as a city mayor with the challenge of balancing urban growth, public health, and sustainability. Through a question-and-answer system, the player makes decisions that directly impact pollution levels, the population's quality of life, and the city's financial resources. The goal is to build a greener, more conscious, and efficient city.",
  tech: ["Construct 2D", "Programming Logic", "Sustainability"],
  
  images: [
    "/img/telluris/telluris-image-1.png",
    "/img/telluris/telluris-image-2.png",
    "/img/telluris/telluris-image-3.png",

  ],
  alt: "Build City Eco game interface showing urban problems",
},
      
    ],
  };

  const allProjects = allProjectsData[language] || allProjectsData["pt"];

  // Lógica de Filtragem Otimizada
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesFilter = filter === "all" || p.category === filter;
      const matchesSearch =
        p.tech.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase()),
        ) || p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm, allProjects]);

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-neon-cyan transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            {language === "pt" ? "Voltar para Home" : "Back to Home"}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
            {language === "pt" ? "GALERIA DE PROJETOS" : "PROJECT GALLERY"}
          </h1>
        </div>

        {/* Grade de Tecnologias */}
        <div className="mb-12">
          <p className="text-[10px] uppercase font-bold text-slate-500 mb-4 tracking-[0.2em] text-center md:text-left">
            {language === "pt" ? "Filtrar por Tecnologia" : "Filter by Tech"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {Object.entries(techIcons).map(([name, icon]) => (
              <button
                key={name}
                onClick={() => setSearchTerm(name === searchTerm ? "" : name)}
                className={`flex flex-col items-center justify-center p-4 w-24 h-24 rounded-2xl border transition-all duration-300 group ${
                  searchTerm.toLowerCase() === name.toLowerCase()
                    ? "bg-neon-cyan/20 border-neon-cyan shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
              >
                <div
                  className={`text-3xl mb-2 transition-transform ${searchTerm.toLowerCase() === name.toLowerCase() ? "scale-110" : "grayscale group-hover:grayscale-0"}`}
                >
                  {icon}
                </div>
                <span className="text-[10px] font-bold tracking-tight text-center">
                  {name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtros de Categoria e Busca */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="flex flex-wrap gap-2 p-1 bg-black/40 rounded-2xl">
            {[
              { id: "all", label: "Todos", icon: <FaLayerGroup /> },
              { id: "front", label: "Front", icon: <FaCode /> },
              { id: "back", label: "Back", icon: <FaServer /> },
              { id: "full", label: "Full", icon: <FaLayerGroup /> },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === cat.id
                    ? "bg-neon-cyan text-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder={
                language === "pt" ? "Buscar tecnologia..." : "Search tech..."
              }
              className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon-cyan outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CardContainer className="w-full h-full">
                  <CardBody className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-neon-cyan/40 w-full h-full rounded-3xl p-6 flex flex-col justify-between transition-all group/card">
                    <div>
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white mb-2"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        as="p"
                        className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px]"
                      >
                        {project.description}
                      </CardItem>

                      {/* Carrossel integrado perfeitamente no Z-index da Galeria */}
                      <CardItem translateZ="100" className="w-full mb-6">
                        <div className="h-44 w-full rounded-2xl relative border border-white/5 overflow-hidden">
                          <ImageCarousel
                            images={project.images}
                            altText={project.title}
                          />
                        </div>
                      </CardItem>
                    </div>

                    <div className="space-y-6">
                      <CardItem
                        translateZ="30"
                        className="flex flex-wrap gap-2"
                      >
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-2 py-1 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </CardItem>

                      <CardItem translateZ="50" className="w-full">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-neon-cyan hover:text-black transition-all"
                        >
                          <FaGithub size={18} /> GitHub
                        </a>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
