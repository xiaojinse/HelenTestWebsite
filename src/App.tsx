import "./App.css";

type Shortcut = {
  label: string;
  icon: string;
  tone: string;
};

const shortcuts: Shortcut[] = [
  { label: "Hotmail", icon: "M", tone: "blue" },
  { label: "IBM Chat", icon: "IBM", tone: "midnight" },
  { label: "W3 Home", icon: "W3", tone: "violet" },
  { label: "GainSight", icon: "G", tone: "green" },
  { label: "IBM Cloud", icon: "C", tone: "cyan" },
  { label: "Translate", icon: "T", tone: "sky" },
  { label: "Baidu", icon: "du", tone: "indigo" },
  { label: "UFJ", icon: "MU", tone: "red" },
  { label: "Information", icon: "H", tone: "forest" },
];

const SearchIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
  </svg>
);

const MicIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);

const LensIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M7 6H5a2 2 0 0 0-2 2v2m14-4h2a2 2 0 0 1 2 2v2M7 18H5a2 2 0 0 1-2-2v-2m14 4h2a2 2 0 0 0 2-2v-2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const SparkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M12 3l1.45 4.35L18 9l-4.55 1.65L12 15l-1.45-4.35L6 9l4.55-1.65L12 3Z" />
    <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
  </svg>
);

const ShareIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.7 10.7 6.6-4.4M8.7 13.3l6.6 4.4" />
  </svg>
);

function App() {
  return (
    <main className="new-tab-shell">
      <nav className="top-links" aria-label="Quick links">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
      </nav>

      <section className="hero-row" aria-label="Search demo">
        <div className="search-stage">
          <div className="logo-lockup">
            <div className="google-mark" aria-label="Google inspired World Cup demo logo">
              <span className="doodle-letter">G</span>
              <span className="soccer-ball" aria-hidden="true">
                <span />
              </span>
              <span className="flower-mark" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="doodle-letter">g</span>
              <span className="doodle-letter">l</span>
              <span className="doodle-letter">e</span>
            </div>

            <aside className="demo-copy">
              <p>Demo for IBM Bob</p>
              <p>Code Engine Specialist mode</p>
            </aside>
          </div>

          <button className="share-button" aria-label="Share demo">
            <ShareIcon />
          </button>

          <div className="search-box" role="search">
            <SearchIcon />
            <input aria-label="Search" placeholder="Search Google or type a URL" />
            <button aria-label="Voice search">
              <MicIcon />
            </button>
            <button aria-label="Image search">
              <LensIcon />
            </button>
            <button className="ai-mode" aria-label="AI Mode">
              <SparkIcon />
              <span>AI Mode</span>
            </button>
          </div>

          <div className="shortcut-grid" aria-label="Application shortcuts">
            {shortcuts.map((shortcut) => (
              <button
                className={`shortcut shortcut-${shortcut.tone}`}
                key={shortcut.label}
                title={shortcut.label}
                aria-label={shortcut.label}
              >
                <span>{shortcut.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
