import Image from "next/image";
import profilePhoto from "@/public/profile.jpeg";
import { ArrowDownward, ArrowForward, ArrowOutward, Download, GitHub, LinkedIn } from "@mui/icons-material";
import AboutMeSection from "@/src/components/aboutMeSection";
import FeaturedProjectSection from "@/src/components/featuredProjectSection";
import PortfolioMotion from "@/src/components/portfolioMotion";
import WelcomeOverlay from "@/src/components/welcomeOverlay";

const stack = [
  { area: "Backend", tools: "Java · Spring Boot · NestJS" },
  { area: "Frontend", tools: "React · Next.js · TypeScript" },
  { area: "Datos", tools: "PostgreSQL · MongoDB" },
  { area: "Arquitectura & entrega", tools: "Hexagonal · Docker · CI/CD" },
];

export default function Home() {
  return (
    <PortfolioMotion>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="wordmark" href="#inicio" aria-label="George Eduard Turcescu, inicio">get<span>.</span>
          </a>
          <nav aria-label="Navegación principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a className="nav-contact" href="#contacto">Hablemos <ArrowOutward />
            </a>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section className="hero container" id="inicio" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow" data-reveal data-delay="40">
              <span className="status-dot" /> Full Stack Software Developer</p>
            <h1 id="hero-heading">
              <span className="hero-name-line"><span data-reveal="text" data-delay="100">George Eduard</span></span>
              <span className="hero-name-line hero-name-accent"><span data-reveal="text" data-delay="220">Turcescu<span className="name-dot">.</span></span></span>
            </h1>
            <p className="hero-description" data-reveal data-delay="300">De la idea al producto.<br />Construyo software con <strong>criterio y propósito.</strong>
            </p>
            <p className="hero-detail" data-reveal data-delay="380">Java, Spring Boot y Next.js. Arquitectura clara, experiencia de usuario y atención a los detalles.</p>
            <div className="button-row" data-reveal data-delay="440">
              <a className="button button-primary" href="#proyectos">Explorar mi trabajo <ArrowForward />
              </a>
              <a className="button button-secondary" href="/cv.pdf?v=befde697" target="_blank" rel="noopener noreferrer">Ver CV <Download />
              </a>
            </div>
            <div className="hero-meta" data-reveal data-delay="500">
              <span>Madrid, España</span>
              <span className="meta-divider" />
              <a href="https://github.com/georgeeduardtp" target="_blank" rel="noopener noreferrer">GitHub <ArrowOutward />
              </a>
              <a href="https://www.linkedin.com/in/georgeeduardtp" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowOutward />
              </a>
            </div>
          </div>
          <div className="portrait-composition" data-reveal="portrait" data-delay="180">
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <span className="portrait-coordinate" aria-hidden="true">PERSONA + PRODUCTO + CÓDIGO</span>
            <div className="portrait-frame">
              <Image src={profilePhoto} alt="George Eduard Turcescu" width={560} height={560} priority sizes="(max-width: 600px) 260px, (max-width: 1099px) 360px, (max-width: 1800px) 30vw, 460px" />
            </div>
            <div className="portrait-caption">
              <span className="status-dot" />
              <span>Siempre construyendo.<br />
                <strong>Siempre aprendiendo.</strong>
              </span>
            </div>
            <span className="portrait-index" aria-hidden="true">01 / PERFIL</span>
          </div>
          <a className="scroll-cue" href="#proyectos">
            <ArrowDownward /> Conoce lo que construyo</a>
        </section>
        <div className="stack-strip">
          <div className="container stack-grid" aria-label="Stack técnico por áreas">{stack.map((group, index) => <div className="stack-group" key={group.area} data-reveal data-delay={index * 70}>
            <span className="eyebrow">{group.area}</span>
            <p>{group.tools}</p>
          </div>)}</div>
        </div>
        <FeaturedProjectSection />
        <AboutMeSection />
        <section className="contact-section container section" id="contacto" aria-labelledby="contact-heading">
          <div className="section-label" data-reveal>
            <span>03 / SIGUIENTE PASO</span>
            <span className="section-line" />
          </div>
          <div className="contact-grid">
            <div data-reveal>
              <p className="eyebrow">Las buenas ideas empiezan con una conversación</p>
              <h2 id="contact-heading">¿Construimos<br />algo <span>juntos?</span>
              </h2>
              <p>Para hablar de un proyecto, una oportunidad o simplemente intercambiar ideas.</p>
            </div>
            <div className="contact-actions" data-reveal data-delay="120">
              <a className="contact-email" href="mailto:georgeeduard.tp@gmail.com">georgeeduard.tp@gmail.com <ArrowOutward />
              </a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/georgeeduardtp" target="_blank" rel="noopener noreferrer">
                  <LinkedIn /> LinkedIn <ArrowOutward />
                </a>
                <a href="https://github.com/georgeeduardtp" target="_blank" rel="noopener noreferrer">
                  <GitHub /> GitHub <ArrowOutward />
                </a>
                <a href="/cv.pdf?v=befde697" target="_blank" rel="noopener noreferrer">
                  <Download /> Currículum <ArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <a className="wordmark" href="#inicio" aria-label="Volver al inicio">get<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} George Eduard Turcescu</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
      <WelcomeOverlay />
    </PortfolioMotion>
  );
}
