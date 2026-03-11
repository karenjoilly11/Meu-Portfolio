import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

const Music = ({ language }) => {
  const content = {
    pt: {
      title: "Minha Trilha Sonora.",
      subtitle:
        "As frequências que embalam minhas horas de código e foco profundo.",
      recentlyPlayed: "Ouvidas Recentemente",
    },
    en: {
      title: "My Soundtrack.",
      subtitle: "The frequencies that fuel my coding and deep focus hours.",
      recentlyPlayed: "Recently Played",
    },
  };

  const text = content[language];

  return (
    <section id="musica" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ícone rosa combinando com seu tema */}
          <FaSpotify className="text-6xl text-[#f62f7a] mx-auto mb-8 drop-shadow-[0_0_20px_rgba(246,47,122,0.4)] hover:scale-110 transition-transform duration-300 cursor-pointer" />

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {text.title}
          </h2>

          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Histórico do Spotify */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full mx-auto"
        >
          {/* Nuvem de luz rosa atrás do conteúdo */}
          <div className="absolute inset-0 bg-[#f62f7a]/10 blur-[80px] rounded-full -z-10"></div>

          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            {/* Cabeçalho com usuário */}
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="w-2 h-2 rounded-full bg-[#f62f7a] animate-pulse"></div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                {text.recentlyPlayed}
              </span>
              <div className="flex-1"></div>
              <span className="text-[10px] text-slate-600 font-mono">
                @karenjoilly
              </span>
            </div>

            {/* Cards do Spotify */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src="https://spotify-recently-played-readme.vercel.app/api?user=58gleairry6qdzaq1rv1sv5iu&count=5&width=400"
                  alt="Spotify Recently Played"
                  className="rounded-xl w-full max-w-md"
                />
              </div>
            </div>

            {/* Rodapé com atualização em tempo real */}
            <div className="flex justify-between items-center mt-6 text-[10px] text-slate-600 font-mono border-t border-white/10 pt-4">
              <span>Atualizado em tempo real</span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-green-500"></span>
                live
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
