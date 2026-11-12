import { useLanguage } from '../context/LanguageContext';

// Cinta delgada con el manifiesto (el índice de tarjetas se quitó: el header ya navega)
const IndexSection = () => {
  const { language } = useLanguage();
  const es = language === 'es';

  const manifesto = es
    ? ['Código limpio', 'diseño con intención', 'Productos reales', 'hecho en Lima', 'Ingeniería de software']
    : ['Clean code', 'design with intent', 'Real products', 'made in Lima', 'Software engineering'];

  return (
    <div className="relative overflow-hidden bg-paper text-ink py-1.5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...manifesto, ...manifesto].map((m, i) => (
          <span key={i} className={`px-5 whitespace-nowrap text-lg ${i % 2 ? 'font-serif italic' : 'font-display uppercase'}`}>
            {m} <span className="text-violet-deep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IndexSection;
