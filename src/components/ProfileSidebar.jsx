export function ContactLinks({ profile }) {
  const items = [
    { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '' },
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
  ];
  return <ul className="contact-list">
    {items.filter(item => item.href).map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}
  </ul>;
}
