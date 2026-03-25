import { useEffect } from 'react';

function HeroSection({ name = 'Keane Ferdinand' }) {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const heroBack = document.querySelector('.hero-back');
      const blockText = document.querySelector('.block-text');

      if (heroBack) {
        heroBack.style.transform = `scale(${1 + scroll / 600})`;
      }
      if (blockText) {
        blockText.style.transform = `translate(-50%, -50%) scale(${1 + scroll / 500})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="image-container">
      <div className="hero-back" />
      <div className="hero-text">
        <h1 className="block-text">{name}</h1>
      </div>
      {/* Gradient overlay for smooth transition */}
      <div className="hero-gradient-bottom" />
    </div>
  );
}

export default HeroSection;
