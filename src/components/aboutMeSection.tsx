"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import { ArrowBack, ArrowForward, ArrowOutward } from "@mui/icons-material";
import PortfolioDialog from "./portfolioDialog";

const cards = [
  { label: "Experiencia", title: "Full Stack Software Development", meta: "Humana SPES · feb. — may. 2026", location: "Madrid · Híbrido", body: ["Aplicaciones web con Next.js y NestJS.", "APIs tipadas con GraphQL y lógica de negocio con Java.", "Contenedorización con Docker y pipelines CI/CD."], tags: ["Next.js", "NestJS", "GraphQL", "Java", "Docker"] },
  { label: "Formación", title: "Una base técnica que sigue creciendo.", meta: "Ingeniería Informática · UTAMED", location: "2026 — 2030 · Actualmente", body: ["Desarrollo de Aplicaciones Multiplataforma · FP Lumara · 2024 — 2026.", "Bachillerato · Institución La Salle · 2021 — 2023."], tags: ["Ingeniería Informática", "DAM"] },
  { label: "Idiomas", title: "Distintos idiomas. La misma curiosidad.", meta: "Comunicación y documentación técnica", location: "Español · Inglés · Rumano", body: ["Español: competencia profesional completa.", "Inglés: lectura técnica, documentación y comunicación profesional.", "Rumano: competencia nativa o bilingüe."], tags: ["Español", "Inglés técnico", "Rumano"] },
  { label: "Mi enfoque", title: "Entender. Decidir. Construir.", meta: "Cómo me gusta trabajar", location: "Producto · Arquitectura · Equipo", body: ["Comunicar las decisiones técnicas con claridad y escuchar al equipo.", "Resolver problemas desde el dominio y las necesidades del usuario.", "Cuidar la calidad del código, aplicar SOLID y aprender con autonomía."], tags: ["Comunicación", "Calidad", "Aprendizaje"] },
];

export default function AboutMeSection() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; scroll: number } | null>(null);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0 || (event.target as HTMLElement).closest("a, button")) return;
    dragStart.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
    setDragging(true);
    event.preventDefault();
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return;
    event.currentTarget.scrollLeft = dragStart.current.scroll + dragStart.current.x - event.clientX;
  }

  function endDrag() {
    dragStart.current = null;
    setDragging(false);
  }

  function goTo(index: number) {
    const container = track.current;
    const card = container?.children[index] as HTMLElement | undefined;
    if (!container || !card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.scrollTo({ left: card.offsetLeft, behavior: reduced ? "instant" : "smooth" });
  }

  function onScroll() {
    const container = track.current;
    if (!container) return;
    const positions = Array.from(container.children).map(child => Math.abs((child as HTMLElement).offsetLeft - container.scrollLeft));
    setActive(positions.indexOf(Math.min(...positions)));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const destinations: Record<string, number> = { ArrowRight: Math.min(active + 1, cards.length - 1), ArrowLeft: Math.max(active - 1, 0), Home: 0, End: cards.length - 1 };
    if (event.key in destinations) { event.preventDefault(); goTo(destinations[event.key]); }
  }

  return (
    <section className="container section about-section" id="sobre-mi" aria-labelledby="about-heading">
      <div className="section-label" data-reveal>
        <span>02 / DETRÁS DEL CÓDIGO</span>
        <span className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-copy" data-reveal data-delay="80">
          <p className="eyebrow">Sobre mí</p>
          <h2 id="about-heading">Pensar el producto.<br />
            <span>Cuidar el código.</span>
          </h2>
          <p>Soy desarrollador Full Stack y me interesa todo lo que conecta una idea con un producto útil: el dominio, los datos, la arquitectura y la experiencia de quien lo utiliza.</p>
          <p>Trabajo con Java, Spring Boot, Next.js y TypeScript. Me gusta hacer buenas preguntas, separar responsabilidades y construir sistemas que se puedan entender, mantener y mejorar.</p>
          <button className="text-link" onClick={() => setOpen(true)}>Un poco más sobre mí <ArrowOutward />
          </button>
          <div className="about-principles">
            <span>Curiosidad</span>
            <span>Criterio</span>
            <span>Colaboración</span>
          </div>
        </div>
        <div className="profile-carousel" role="region" aria-roledescription="carrusel" aria-label="Trayectoria y perfil profesional" data-reveal data-delay="160">
          <div className="carousel-navigation">
            <div className="carousel-tabs" aria-label="Elegir apartado">{cards.map((card, index) => <button key={card.label} aria-label={`Ver ${card.label}`} aria-current={index === active ? "true" : undefined} onClick={() => goTo(index)}>
              <span className="tab-number">0{index + 1}</span>
              <span>{card.label}</span>
            </button>)}</div>
          </div>
          <div className="profile-track" ref={track} onScroll={onScroll} onKeyDown={onKeyDown} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag} data-dragging={dragging} tabIndex={0} aria-label="Desliza para explorar. También puedes usar las flechas del teclado.">
            {cards.map((card, index) => <article className="profile-card" key={card.label} role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${cards.length}: ${card.label}`}>
              <div className="profile-card-top">
                <p className="eyebrow">{card.label}</p>
                <span className="card-index">0{index + 1}</span>
              </div>
              <h3>{card.title}</h3>
              <p className="card-meta">{card.meta}</p>
              <p className="card-location">{card.location}</p>
              <ul>{card.body.map(line => <li key={line}>{line}</li>)}</ul>{index === 1 && <div className="education-links">
                <a href="https://utamed.es/" target="_blank" rel="noopener noreferrer" aria-label="Visitar UTAMED (abre en otra pestaña)">
                  <span className="education-logo"><Image className="education-logo-utamed" src="/utamed.png" alt="UTAMED" fill sizes="(min-width: 1100px) 150px, 120px" /></span>
                  <ArrowOutward />
                </a>
                <a href="https://www.fplumara.com/" target="_blank" rel="noopener noreferrer" aria-label="Visitar FP Lumara (abre en otra pestaña)">
                  <span className="education-logo"><Image src="/fplumara.png" alt="FP Lumara" fill sizes="(min-width: 1100px) 150px, 120px" /></span>
                  <ArrowOutward />
                </a>
              </div>}<div className="tags">{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <div className="carousel-footer">
            <span className="carousel-status" aria-live="polite" aria-atomic="true">0{active + 1} <span>/ 04 · {cards[active].label}</span>
            </span>
            <div className="carousel-arrows">
              <button className="icon-button" aria-label="Apartado anterior" disabled={active === 0} onClick={() => goTo(active - 1)}>
                <ArrowBack />
              </button>
              <button className="icon-button" aria-label="Apartado siguiente" disabled={active === cards.length - 1} onClick={() => goTo(active + 1)}>
                <ArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PortfolioDialog open={open} onClose={() => setOpen(false)} eyebrow="Perfil completo" title="Cómo pienso, construyo y aprendo.">
        <p className="dialog-intro">Entender bien el sistema antes de escribir la solución.</p>
        <p>Soy desarrollador Full Stack con una visión del producto de principio a fin: arquitectura backend, lógica de negocio, interfaz y experiencia de usuario trabajando en la misma dirección.</p>
        <p>Trabajo especialmente cómodo con Java, Spring Boot, Next.js, TypeScript y bases de datos relacionales y no relacionales. Me interesa la arquitectura hexagonal porque obliga a pensar en dominio, casos de uso, adaptadores e infraestructura con límites claros.</p>
        <p>Me importa entender el porqué antes de construir: qué necesita el usuario, qué restricciones tiene el sistema y qué decisión técnica reduce complejidad a futuro.</p>
        <div className="pillar-grid">
          <div>
            <h3>01 / Arquitectura</h3>
            <p>Separar dominio, casos de uso e infraestructura para que el sistema sea claro y fácil de evolucionar.</p>
          </div>
          <div>
            <h3>02 / Producto</h3>
            <p>Entender el problema, el usuario, las restricciones y el impacto real de cada decisión.</p>
          </div>
          <div>
            <h3>03 / Calidad</h3>
            <p>Cuidar la legibilidad, la separación de responsabilidades y los principios SOLID.</p>
          </div>
          <div>
            <h3>04 / Aprendizaje</h3>
            <p>Preguntar, escuchar y aprovechar cada proyecto para ganar criterio y aprender de perfiles con más experiencia.</p>
          </div>
        </div>
        <p>Trabajo bien en equipo, soy autocrítico y me gusta investigar nuevas tecnologías con autonomía. Construir Pelu Go me ha permitido conectar esas inquietudes en un producto con reglas de negocio reales.</p>
        <div className="dialog-quote">Sistemas que se pueden entender, mantener y hacer crecer.</div>
        <a className="button button-secondary" href="/cv.pdf?v=befde697" target="_blank" rel="noopener noreferrer">Consultar mi CV <ArrowOutward />
        </a>
      </PortfolioDialog>
    </section>
  );
}
