import { profile } from './profile.js';
import { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import { ContactLinks } from './components/ProfileSidebar.jsx';

function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

function Picture({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  return src && !failed ? <img className={className} src={assetUrl(src)} alt={alt} onError={() => setFailed(true)} /> : null;
}

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navigation name={profile.name} />
    <main id="main-content" className="page" tabIndex={-1}>
      <section id="home" className="introduction" aria-labelledby="name-heading">
        <div className="intro-text">
          <h1 id="name-heading">{profile.name}</h1>
          <p className="subtitle">{profile.role} @ {profile.affiliation}</p>
          <div className="profile-links"><ContactLinks profile={profile} />{profile.cv && <a href={assetUrl(profile.cv)}>CV</a>}</div>
          {profile.biography.map(text => <p key={text}>{text}</p>)}
        </div>
        {profile.headshot && <figure className="profile-photo"><Picture src={profile.headshot} alt={`Portrait of ${profile.name}`} /></figure>}
      </section>
      <section id="research" className="section" aria-label="Research interests">
        <p><strong>Research Interests:</strong> {profile.researchInterests}</p>
      </section>
    </main>
    <footer className="site-footer">© {new Date().getFullYear()} {profile.name}</footer>
  </>;
}
