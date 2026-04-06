import { useEffect, useRef } from 'react';

const links = [
  { href: '#projects', label: 'PROJECTS', num: '(01)', color: '#98c1d9' },
  { href: '#about', label: 'ABOUT', num: '(02)', color: '#ffb7b2' },
  { href: '#skills', label: 'SKILLS', num: '(03)', color: '#ffdac1' },
  { href: '#contact', label: 'CONTACT', num: '(04)', color: '#e8a87c' },
];

export default function SidebarNav() {
  const stripsRef = useRef([]);

  useEffect(() => {
    const sections = ['projects', 'about', 'skills', 'contact'];
    const onScroll = () => {
      let current = '';
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = id;
        }
      });
      stripsRef.current.forEach((strip) => {
        if (!strip) return;
        const href = strip.getAttribute('href');
        if (href === '#' + current) {
          strip.style.width = '64px';
          strip.style.filter = 'brightness(1.1)';
        } else {
          strip.style.width = '';
          strip.style.filter = '';
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sidebar-nav" id="sidebarNav">
      {links.map((l, i) => (
        <a
          key={l.href}
          href={l.href}
          className="sidebar-strip"
          style={{ '--strip-color': l.color }}
          ref={(el) => (stripsRef.current[i] = el)}
          onClick={handleClick}
        >
          <span>{l.num}</span>
          <span>{l.label}</span>
        </a>
      ))}
    </nav>
  );
}
