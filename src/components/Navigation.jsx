import { useEffect, useState } from 'react';

const links = [['home', 'About'], ['research', 'Research interests']];

export default function Navigation({ name }) {
  const [active, setActive] = useState(window.location.hash.slice(1) || 'home');
  useEffect(() => {
    const update = () => setActive(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return <header className="site-header">
    <div className="header-inner">
      <a className="wordmark" href="#home">{name}</a>
      <nav aria-label="Main navigation"><ul>
        {links.map(([id, label]) => <li key={id}><a href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a></li>)}
      </ul></nav>
    </div>
  </header>;
}
