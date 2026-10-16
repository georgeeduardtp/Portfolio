"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowForward, ArrowOutward, CalendarMonth, LayersOutlined, Storefront } from "@mui/icons-material";
import PortfolioDialog from "./portfolioDialog";

const tags = ["Java", "Spring Boot", "Next.js", "PostgreSQL", "MongoDB", "Multitenancy", "RBAC"];

export default function FeaturedProjectSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="container section projects-section" id="proyectos" aria-labelledby="projects-heading">
      <div className="section-label" data-reveal>
        <span>01 / TRABAJO SELECCIONADO</span>
        <span className="section-line" />
        <span>IDEA → PRODUCTO</span>
      </div>
      <div className="section-heading" data-reveal data-delay="80">
        <h2 id="projects-heading">Código con un<br />
          <span>problema que resolver.</span>
        </h2>
        <p>Un proyecto que une producto, diseño y arquitectura de software.</p>
      </div>
      <article className="project-card" data-reveal data-delay="120">
        <div className="project-preview">
          <div className="preview-topline">
            <span>
              <span className="status-dot" /> PELU GO / WEB APP</span>
            <a href="https://pelugo.es" target="_blank" rel="noopener noreferrer" aria-label="Visitar Pelu Go (abre en otra pestaña)">
              <ArrowOutward />
            </a>
          </div>
          <div className="product-browser">
            <div className="browser-toolbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>pelugo.es</p>
              <span className="browser-secure">↗</span>
            </div>
            <Image src="/pelugo-home.png" alt="Captura real de Pelu Go: buscador de peluquerías y reserva de servicios" width={602} height={275} sizes="(max-width: 800px) 90vw, (max-width: 1100px) 50vw, 750px" />
          </div>
          <div className="product-journey">
            <span>Descubre</span>
            <ArrowForward />
            <span>Reserva</span>
            <ArrowForward />
            <span>Gestiona</span>
          </div>
          <p className="preview-caption">Una experiencia para clientes. Un espacio para cada negocio.</p>
        </div>
        <div className="project-copy">
          <p className="eyebrow">Proyecto destacado · SaaS B2B2C</p>
          <h3>Pelu Go
          </h3>
          <p className="project-lead">Tu próxima cita.<br />Todo un sistema detrás.</p>
          <p>Una plataforma para descubrir peluquerías y reservar servicios. Para los negocios, un espacio donde gestionar su equipo, horarios, disponibilidad e identidad digital.</p>
          <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="project-actions">
            <button className="button button-primary" onClick={() => setOpen(true)}>Explorar el proyecto <ArrowForward />
            </button>
            <a className="text-link" href="https://pelugo.es" target="_blank" rel="noopener noreferrer">Visitar web <ArrowOutward />
            </a>
          </div>
        </div>
      </article>
      <div className="project-footnotes">
        <div data-reveal>
          <Storefront />
          <p>
            <strong>Producto completo</strong>
            <span>Clientes y negocios en una misma plataforma.</span>
          </p>
        </div>
        <div data-reveal data-delay="80">
          <LayersOutlined />
          <p>
            <strong>Arquitectura hexagonal</strong>
            <span>Dominio, aplicación e infraestructura separados.</span>
          </p>
        </div>
        <div data-reveal data-delay="160">
          <CalendarMonth />
          <p>
            <strong>Reglas de negocio reales</strong>
            <span>Servicios, horarios, disponibilidad y reservas.</span>
          </p>
        </div>
      </div>
      <PortfolioDialog open={open} onClose={() => setOpen(false)} eyebrow="Caso de proyecto / Pelu Go" title="De una necesidad a un producto.">
        <Image className="case-screenshot" src="/pelugo-home.png" alt="Página de inicio de Pelu Go" width={602} height={275} sizes="(max-width: 700px) 90vw, 800px" />
        <div className="case-facts">
          <div>
            <span>TIPO</span>
            <strong>SaaS B2B2C</strong>
          </div>
          <div>
            <span>MI TRABAJO</span>
            <strong>Producto, diseño y desarrollo Full Stack</strong>
          </div>
          <div>
            <span>AÑO</span>
            <strong>2026</strong>
          </div>
        </div>
        <h3>El problema</h3>
        <p>Las peluquerías locales necesitan visibilidad digital y una forma de organizar sus citas. Los clientes necesitan encontrar un negocio, conocer sus servicios y consultar cuándo pueden reservar.</p>
        <h3>La solución</h3>
        <p>Pelu Go reúne un escaparate público por negocio y un panel de gestión. Los propietarios configuran servicios, empleados, jornadas y descansos; los clientes consultan la disponibilidad y reservan.</p>
        <h3>Las decisiones técnicas</h3>
        <div className="pillar-grid">
          <div>
            <h4>Dominio separado</h4>
            <p>Java y Spring Boot con arquitectura hexagonal para separar las reglas de negocio de los controladores y la persistencia.</p>
          </div>
          <div>
            <h4>Aislamiento entre negocios</h4>
            <p>Un modelo multitenant para mantener los datos y la operativa de cada negocio separados.</p>
          </div>
          <div>
            <h4>Identidad y permisos</h4>
            <p>Spring Security, JWT y roles para diferenciar las acciones de clientes, propietarios y empleados.</p>
          </div>
          <div>
            <h4>Interfaz y entrega</h4>
            <p>Next.js, React y TypeScript en el frontend. PostgreSQL, migraciones con Flyway y almacenamiento de imágenes en Cloudflare R2.</p>
          </div>
        </div>
        <h3>Lo que me llevo</h3>
        <p>Mi primer proyecto con arquitectura hexagonal me ha obligado a pensar mejor en los límites del dominio. Conectar autenticación, horarios y reservas también me ha permitido trabajar el producto de principio a fin y comprobar la integración de la API con Postman.</p>
        <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="button button-primary" href="https://pelugo.es" target="_blank" rel="noopener noreferrer">Visitar Pelu Go <ArrowOutward />
        </a>
      </PortfolioDialog>
    </section>
  );
}
