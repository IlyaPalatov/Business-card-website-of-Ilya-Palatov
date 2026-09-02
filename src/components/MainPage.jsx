import React, { useState, useEffect, useRef } from 'react';
import '../styles/MainPageStyles.css';
import Modal from './ModalContactToMe';
import BurgerMenu from './BurgerMenu';

const SKILLS = [
  { name: 'React', level: 92 },
  { name: 'React Native', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'Node.js', level: 80 },
];

const GithubIcon = () => (
  <svg viewBox="0 0 30 30" aria-hidden="true">
    <path d="M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="icon-email"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.4" />
    <path
      d="M3.5 6.2 12 12.8l8.5-6.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 256 256" aria-hidden="true">
    <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z" />
  </svg>
);

export const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cardRef = useRef(null);
  const heroVisualRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (prefersReduced || !canHover) return undefined;

    const handleMouseMove = e => {
      const card = cardRef.current;
      const zone = heroVisualRef.current;
      if (!card || !zone) return;
      const rect = zone.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      card.style.transform = `rotateX(${8 - dy * 10}deg) rotateY(${-14 + dx * 16}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="background-theme">
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Ilya Palatov.
        </button>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <button className="nav-cta" onClick={openModal}>
          Get in touch
        </button>

        <BurgerMenu onContactClick={openModal} />
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <div className="wrap">
        <section className="hero" id="home">
          <div>
            <div className="hero-eyebrow">
              full-stack · <span>react &amp; react native</span>
            </div>
            <h1>
              Ilya Palatov —<br />
              <em>I build products</em>
              <br />
              that work.
            </h1>
            <p className="hero-desc">
              4 years building web and mobile apps with React Native. From
              architecture to release on the App Store and Google Play.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={openModal}>
                Let's talk
              </button>
              <div className="social-row">
                <a href="https://github.com/IlyaPalatov" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href="mailto:ilapalatov@gmail.com" aria-label="Email">
                  <EmailIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/ilya-palatov-0091942a1/"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual" ref={heroVisualRef}>
            <div className="tilt-card" ref={cardRef}>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <span className="k">const</span> dev = {'{'}
                {'\n'} name: <span className="s">"Ilya Palatov"</span>,{'\n'}{' '}
                role: <span className="s">"Full Stack / RN"</span>,{'\n'} stack:
                [<span className="s">"React"</span>,{' '}
                <span className="s">"RN"</span>,{'\n'}{' '}
                <span className="s">"TypeScript"</span>,{' '}
                <span className="s">"Node"</span>],
                {'\n'} experience: <span className="k">4</span>,{'\n'}{' '}
                available: <span className="k">true</span>,{'\n'}
                {'}'};
              </pre>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="section-head">
            <div className="section-label">01 · about</div>
            <h2 className="section-title">
              Technical background <em>and how I work</em>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                For the past several years I've owned a mobile product from
                architecture through release: feature development, EAS builds,
                and publishing to the App Store and Google Play — end to end, on
                my own.
              </p>
              <p>
                Before that, I completed the Full Stack Developer program at
                GoIT. I'm currently also studying Management of Organizations at
                Taras Shevchenko National University of Kyiv.
              </p>
            </div>
            <div className="stack-panel">
              <div className="stack-panel-head">stack.json</div>
              <div className="stack-list">
                {SKILLS.map(skill => (
                  <div className="stack-row" key={skill.name}>
                    <span className="stack-name">{skill.name}</span>
                    <div className="stack-meter">
                      <i style={{ width: `${skill.level}%` }}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="stats">
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-label">years of experience</div>
          </div>
          <div className="stat">
            <div className="stat-num">1</div>
            <div className="stat-label">mobile product owned end-to-end</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">
              platforms · App Store / Google Play
            </div>
          </div>
        </div>

        <section>
          <div className="section-head">
            <div className="section-label">02 · education</div>
            <h2 className="section-title">
              Formal <em>training</em>
            </h2>
          </div>
          <div className="edu-card">
            <div>
              <h3>GoIT — Full Stack Developer</h3>
              <p>
                An IT course that led into commercial development. Certificate
                linked below.
              </p>
            </div>
            <a
              className="edu-link"
              href="https://drive.google.com/file/d/1223Z3_E39HFtPMX51IxIJucazzyI2LyC/view?usp=sharing"
            >
              Certificate →
            </a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="nav-logo">Ilya Palatov.</div>
          <p>© {currentYear}. Built by Ilya Palatov.</p>
        </div>
      </footer>
    </div>
  );
};
