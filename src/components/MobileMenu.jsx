import { useState } from 'react';

const menuLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  const close = (e) => {
    e.preventDefault();
    setActive(false);
    document.body.style.overflow = '';
    const id = e.currentTarget.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <button
        className={`mobile-menu-btn${active ? ' active' : ''}`}
        id="mobileMenuBtn"
        aria-label="Toggle Menu"
        onClick={toggle}
      >
        <span /><span /><span />
      </button>
      <div className={`mobile-menu-overlay${active ? ' active' : ''}`} id="mobileMenuOverlay">
        {menuLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
