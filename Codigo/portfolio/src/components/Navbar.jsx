const Navbar = ({ language, toggleLanguage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Logo */}
      <div className="text-2xl font-extrabold text-sky-400 tracking-widest">
        <a href="#home">LF.</a>
      </div>

      {/* Links de Navegação (Ocultos em telas muito pequenas, visíveis em telas médias/grandes) */}
      <ul className="hidden md:flex gap-8 m-0 p-0 list-none">
        <li>
          <a href="#sobre" className="text-slate-200 hover:text-sky-400 font-medium transition-colors duration-300">
            {language === 'pt' ? 'Sobre Mim' : 'About'}
          </a>
        </li>
        <li>
          <a href="#projetos" className="text-slate-200 hover:text-sky-400 font-medium transition-colors duration-300">
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </a>
        </li>
        <li>
          <a href="#experiencias" className="text-slate-200 hover:text-sky-400 font-medium transition-colors duration-300">
            {language === 'pt' ? 'Experiências' : 'Experience'}
          </a>
        </li>
        <li>
          <a href="#contato" className="text-slate-200 hover:text-sky-400 font-medium transition-colors duration-300">
            {language === 'pt' ? 'Contato' : 'Contact'}
          </a>
        </li>
      </ul>
      
      {/* Botão de Idioma */}
      <button 
        onClick={toggleLanguage}
        className="px-3 py-1 rounded border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 font-semibold cursor-pointer"
      >
        {language === 'pt' ? 'EN' : 'PT'}
      </button>

    </nav>
  );
};

export default Navbar;