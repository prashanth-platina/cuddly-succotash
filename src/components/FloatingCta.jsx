export default function FloatingCta() {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <a href="#contact" className="floating-cta" id="floatingCta" onClick={handleClick}>
      Let's chat
    </a>
  );
}
