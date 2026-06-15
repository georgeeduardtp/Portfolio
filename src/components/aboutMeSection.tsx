"use client";

import { useRef, useState } from "react";
import { Box, Chip, Dialog, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, useScroll, useSpring } from "motion/react";

const detailCards = [
  {
    index: "01",
    eyebrow: "Experiencia profesional",
    title: "Full Stack Software Development",
    meta: "Humana SPES · feb. 2026 - may. 2026 · Madrid · Hibrido",
    body: [
      "Desarrollo de aplicaciones web de alto rendimiento con Next.js y NestJS.",
      "Implementacion de APIs eficientes y tipadas mediante GraphQL.",
      "Microservicios y logica de negocio robusta utilizando Java.",
      "Pipelines CI/CD y contenedorizacion con Docker.",
    ],
    tags: ["Next.js", "NestJS", "GraphQL", "Java", "Docker"],
  },
  {
    index: "02",
    eyebrow: "Formacion",
    title: "Ingenieria Informatica",
    meta: "UTAMED · Actualmente",
    body: [
      "Ingenieria Informatica en UTAMED (Actualmente) · 2026 - 2030.",
      "Desarrollo de Aplicaciones Multiplataforma · FP Lumara · 2024 - 2026.",
      "Formacion previa: Bachillerato en Institucion La Salle · 2021 - 2023.",
    ],
    tags: ["Ingenieria Informatica", "DAM", "Software"],
  },
  {
    index: "03",
    eyebrow: "Idiomas",
    title: "Comunicacion en varios contextos.",
    body: [
      "Español: competencia profesional completa.",
      "Ingles: lectura tecnica, documentacion y comunicacion profesional.",
      "Rumano: competencia nativa o bilingue.",
    ],
    tags: ["Español", "Ingles tecnico", "Rumano"],
  },
  {
    index: "04",
    eyebrow: "Skills profesionales",
    title: "Comunicacion, criterio tecnico y aprendizaje autonomo.",
    body: [
      "Comunicacion efectiva: articulacion clara de ideas tecnicas para facilitar la toma de decisiones en equipo.",
      "Resolucion de problemas: enfoque analitico para abordar desafios logicos y de arquitectura de software.",
      "Mentalidad de calidad: compromiso con codigo limpio y mantenible bajo estandares SOLID.",
      "Adaptabilidad: capacidad para investigar e implementar nuevas tecnologias de manera autonoma.",
    ],
    tags: ["Comunicacion efectiva", "Resolucion", "Calidad", "Adaptabilidad"],
  },
];

const profilePillars = [
  {
    label: "Arquitectura",
    text: "Separo dominio, casos de uso e infraestructura para que el sistema sea claro, mantenible y facil de evolucionar.",
  },
  {
    label: "Producto",
    text: "Antes de construir intento entender el problema, el usuario, las restricciones y el impacto real de cada decision.",
  },
  {
    label: "Calidad",
    text: "Me fijo en la legibilidad, la separacion de responsabilidades, SOLID y en que el codigo no se convierta en deuda innecesaria.",
  },
  {
    label: "Aprendizaje",
    text: "Soy autocritico, pregunto y aprovecho cada proyecto para ganar criterio tecnico y aprender de perfiles con mas experiencia.",
  },
];

export default function AboutMeSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const indicatorScale = useSpring(scrollXProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  return (
    <Box
      component="section"
      aria-labelledby="about-me-heading"
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "100vw",
        px: { xs: 0, md: 3 },
        py: { xs: 6, md: 12 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1320,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(560px, 0.95fr) minmax(0, 1fr)" },
          gap: { xs: 3, md: 5 },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            position: { xs: "relative", md: "sticky" },
            top: { md: 96 },
            minHeight: { md: 520 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mx: { xs: 2.5, md: 0 },
            px: { xs: 2.5, md: 0 },
            py: { xs: 3, md: 0 },
            borderLeft: { xs: 0, md: "1px solid rgba(91,241,196,0.42)" },
            borderTop: { xs: "1px solid rgba(91,241,196,0.34)", md: 0 },
            borderBottom: { xs: "1px solid rgba(255,255,255,0.08)", md: 0 },
            pl: { md: 4 },
            pr: { md: 2 },
            transition: "border-color 180ms ease",
            "&:hover": {
              borderLeftColor: { md: "rgba(91,241,196,0.72)" },
            },
          }}
        >
          <Typography
            component="p"
            sx={{
              mb: 1.5,
              color: "rgba(91, 241, 196, 0.86)",
              fontSize: "0.78rem",
              fontWeight: 850,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Sobre mi
          </Typography>

          <Typography
            id="about-me-heading"
            variant="h2"
            sx={{
              m: 0,
              maxWidth: { xs: 360, md: 620 },
              color: "rgba(245, 247, 251, 0.96)",
              fontSize: { xs: "2rem", md: "3.25rem" },
              fontWeight: 900,
              lineHeight: { xs: 1.03, md: 0.98 },
              letterSpacing: 0,
              "& span": {
                display: "block",
              },
            }}
          >
            <span>Arquitectura, producto y</span>
            <span>aprendizaje constante.</span>
          </Typography>

          <Stack spacing={{ xs: 1.4, md: 1.75 }} sx={{ mt: { xs: 2, md: 3 } }}>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.72)",
                fontSize: { xs: "0.98rem", md: "1.14rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Soy desarrollador Full Stack orientado a producto, con base en
              Java, Spring Boot, Next.js, TypeScript y arquitectura hexagonal.
              Pienso el software desde el dominio: reglas de negocio, casos de
              uso, datos, seguridad y experiencia de usuario.
            </Typography>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.62)",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Me interesa construir sistemas claros, mantenibles y preparados
              para crecer, separando responsabilidades y evitando que la logica
              de negocio quede mezclada con detalles de infraestructura.
            </Typography>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.62)",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Me importa entender el por que antes de construir: que necesita
              el usuario, que restricciones tiene el sistema y que decision
              tecnica reduce complejidad a futuro.
            </Typography>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.62)",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Trabajo bien en equipo, pregunto, soy autocritico y aprovecho
              cada oportunidad para ganar criterio, aprender de perfiles con
              mas experiencia y mejorar mi forma de construir software.
            </Typography>

          </Stack>

          <Box
            component="button"
            type="button"
            onClick={() => setIsAboutOpen(true)}
            sx={{
              alignSelf: "flex-start",
              mt: { xs: 2.4, md: 3 },
              p: 0,
              color: "rgba(91, 241, 196, 0.9)",
              font: "inherit",
              fontSize: "0.78rem",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "transparent",
              border: 0,
              cursor: "pointer",
              "&:hover": {
                color: "rgba(245, 247, 251, 0.94)",
              },
            }}
          >
            Leer perfil completo
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: 0,
            width: "100%",
            gridColumn: { xs: "1", md: "2" },
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              display: { xs: "block", md: "none" },
              width: { xs: "calc(100% - 40px)", md: "100%" },
              mx: { xs: 2.5, md: 0 },
              height: 2,
              mb: 1.5,
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <Box
              component={motion.div}
              style={{ scaleX: indicatorScale }}
              sx={{
                width: "100%",
                height: "100%",
                transformOrigin: "left center",
                background:
                  "linear-gradient(90deg, rgba(91,241,196,0.9), rgba(143,183,255,0.82))",
              }}
            />
          </Box>

          <Box
            ref={scrollRef}
            sx={{
              position: "relative",
              minWidth: 0,
              width: "100%",
              overflowX: "auto",
              overflowY: "hidden",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              pb: 1,
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 5%, #000 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, #000 5%, #000 92%, transparent 100%)",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 2.5 },
                width: "max-content",
                pl: { xs: 2.5, md: 0 },
                pr: { xs: 2.5, md: 6 },
              }}
            >
              {detailCards.map((card) => (
                <Box
                  key={card.index}
                sx={{
                  position: "relative",
                  flex: {
                    xs:
                      card.eyebrow === "Experiencia profesional"
                        ? "0 0 calc(100vw - 88px)"
                        : "0 0 calc(100vw - 40px)",
                    sm:
                      card.eyebrow === "Experiencia profesional"
                        ? "0 0 450px"
                        : card.eyebrow === "Skills profesionales"
                          ? "0 0 520px"
                        : "0 0 410px",
                    md:
                      card.eyebrow === "Experiencia profesional"
                        ? "0 0 520px"
                        : card.eyebrow === "Skills profesionales"
                          ? "0 0 590px"
                        : "0 0 440px",
                  },
                  minHeight: { xs: 340, md: 520 },
                  scrollSnapAlign: "start",
                  overflow: "hidden",
                  borderRadius: 0,
                  borderLeft: "1px solid rgba(255,255,255,0.12)",
                  background: "transparent",
                  boxShadow: "none",
                  backdropFilter: "none",
                  p: { xs: 2.5, md: 3.5 },
                  transition: "border-color 180ms ease, opacity 180ms ease",
                  "&:hover": {
                    borderLeftColor: "rgba(91,241,196,0.56)",
                  },
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    sx={{
                      color: "rgba(91, 241, 196, 0.82)",
                      fontSize: { xs: "0.72rem", md: "0.78rem" },
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                    }}
                  >
                    {card.index}
                  </Typography>

                  <Typography
                    sx={{
                      mt: { xs: 1.5, md: 2 },
                      color: "rgba(245, 247, 251, 0.68)",
                      fontSize: "0.74rem",
                      fontWeight: 850,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.eyebrow}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      mt: 1.5,
                      mb: 0,
                      color: "rgba(245, 247, 251, 0.96)",
                      fontSize: { xs: "1.35rem", md: "1.72rem" },
                      fontWeight: 900,
                      lineHeight: 1.14,
                      letterSpacing: 0,
                    }}
                  >
                    {card.title}
                  </Typography>

                  {"meta" in card && (
                    <Typography
                      sx={{
                        mt: 1.5,
                        color: "rgba(143, 183, 255, 0.78)",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        lineHeight: 1.55,
                      }}
                    >
                      {card.meta}
                    </Typography>
                  )}

                  {card.eyebrow === "Formacion" && (
                    <Stack
                      direction="row"
                      spacing={1.4}
                      sx={{
                        mt: 2.2,
                        alignItems: "center",
                      }}
                    >
                      {[
                        {
                          src: "/utamed.png",
                          alt: "UTAMED",
                          href: "https://utamed.es/",
                        },
                        {
                          src: "/fplumara.png",
                          alt: "FP Lumara",
                          href: "https://www.fplumara.com/",
                        },
                      ].map((logo) => (
                        <Box
                          key={logo.src}
                          component="a"
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir web oficial de ${logo.alt}`}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { xs: 96, md: 112 },
                            height: { xs: 42, md: 48 },
                            px: 1.4,
                            cursor: "pointer",
                            border: "1px solid rgba(255,255,255,0.10)",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            transition:
                              "border-color 180ms ease, background-color 180ms ease, transform 180ms ease",
                            "&:hover": {
                              borderColor: "rgba(91,241,196,0.42)",
                              backgroundColor: "rgba(91,241,196,0.07)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={logo.src}
                            alt={logo.alt}
                            sx={{
                              display: "block",
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                              transform:
                                logo.alt === "UTAMED"
                                  ? "scale(1.34)"
                                  : "scale(1.18)",
                              transformOrigin: "center",
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  )}

                  <Stack spacing={{ xs: 1, md: 1.35 }} sx={{ mt: { xs: 2.25, md: 3 } }}>
                    {card.body.map((line) => (
                      <Typography
                        key={line}
                        sx={{
                          pt: { xs: 1, md: 1.35 },
                          color: "rgba(216, 225, 237, 0.72)",
                          fontSize: { xs: "0.92rem", md: "1rem" },
                          lineHeight: { xs: 1.52, md: 1.68 },
                          borderTop: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {line.includes(":") ? (
                          <>
                            <Box
                              component="span"
                              sx={{
                                color: "rgba(91, 241, 196, 0.9)",
                                fontWeight: 900,
                              }}
                            >
                              {line.split(":")[0]}:
                            </Box>{" "}
                            {line.slice(line.indexOf(":") + 1).trim()}
                          </>
                        ) : (
                          line
                        )}
                      </Typography>
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    sx={{ mt: { xs: 2.5, md: 3.5 } }}
                  >
                    {card.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        sx={{
                          height: 30,
                          color: "rgba(230, 238, 248, 0.82)",
                          fontSize: "0.74rem",
                          fontWeight: 800,
                          border: "1px solid rgba(255,255,255,0.10)",
                          backgroundColor: "rgba(255,255,255,0.045)",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            aria-hidden="true"
            sx={{
              display: { xs: "none", md: "block" },
              width: "100%",
              height: 2,
              mt: 2.5,
              overflow: "hidden",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <Box
              component={motion.div}
              style={{ scaleX: indicatorScale }}
              sx={{
                width: "100%",
                height: "100%",
                transformOrigin: "left center",
                background:
                  "linear-gradient(90deg, rgba(91,241,196,0.9), rgba(143,183,255,0.82))",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Dialog
        open={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            width: { xs: "calc(100% - 28px)", md: "940px" },
            maxWidth: { xs: "calc(100% - 28px)", md: "940px" },
            maxHeight: { xs: "88vh", md: "86vh" },
            m: 0,
            overflow: "hidden",
            color: "rgba(245, 247, 251, 0.94)",
            borderRadius: { xs: 2, md: 3 },
            border: "1px solid rgba(91,241,196,0.18)",
            background:
              "linear-gradient(145deg, rgba(8,13,20,0.98), rgba(3,5,8,0.98))",
            boxShadow:
              "0 34px 120px rgba(0,0,0,0.68), 0 0 90px rgba(91,241,196,0.08)",
          },
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.68)",
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <Box
          onWheelCapture={(event) => event.stopPropagation()}
          onTouchMoveCapture={(event) => event.stopPropagation()}
          sx={{
            position: "relative",
            maxHeight: { xs: "88vh", md: "86vh" },
            overflowY: "auto",
            overflowX: "hidden",
            overscrollBehavior: "contain",
            p: { xs: 3, md: 5 },
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(91,241,196,0.45) rgba(255,255,255,0.05)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `
                radial-gradient(circle at 12% 0%, rgba(91,241,196,0.16), transparent 34%),
                radial-gradient(circle at 92% 18%, rgba(143,183,255,0.14), transparent 30%),
                repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 9px)
              `,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              pointerEvents: "none",
              background:
                "linear-gradient(90deg, rgba(91,241,196,0.9), rgba(143,183,255,0.7), transparent)",
            },
          }}
        >
          <IconButton
            aria-label="Cerrar perfil completo"
            onClick={() => setIsAboutOpen(false)}
            sx={{
              position: "absolute",
              top: { xs: 14, md: 18 },
              right: { xs: 14, md: 18 },
              zIndex: 1,
              color: "rgba(245,247,251,0.72)",
              border: "1px solid rgba(255,255,255,0.10)",
              "&:hover": {
                color: "rgba(245,247,251,0.95)",
                backgroundColor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              pr: { xs: 4, md: 5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 240px" },
              gap: { xs: 3, md: 5 },
              alignItems: "end",
            }}
          >
            <Box>
            <Typography
              component="p"
              sx={{
                mb: 1.6,
                color: "rgba(91, 241, 196, 0.86)",
                fontSize: "0.76rem",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Perfil completo
            </Typography>

            <Typography
              variant="h2"
              sx={{
                m: 0,
                color: "rgba(245,247,251,0.96)",
                fontSize: { xs: "2rem", md: "3.2rem" },
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: 0,
              }}
            >
              Como pienso, construyo y aprendo.
            </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                p: 2.2,
                borderLeft: "1px solid rgba(91,241,196,0.28)",
                background:
                  "linear-gradient(135deg, rgba(91,241,196,0.07), rgba(143,183,255,0.05))",
              }}
            >
              <Typography
                sx={{
                  color: "rgba(91,241,196,0.92)",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Focus
              </Typography>
              <Typography
                sx={{
                  mt: 1.2,
                  color: "rgba(245,247,251,0.9)",
                  fontSize: "1.12rem",
                  fontWeight: 850,
                  lineHeight: 1.35,
                }}
              >
                Entender bien el sistema antes de escribir la solucion.
              </Typography>
            </Box>
          </Box>

          <Stack
            spacing={3}
            sx={{ position: "relative", zIndex: 1, mt: { xs: 3, md: 4 } }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                gap: { xs: 2.5, md: 4 },
                alignItems: "start",
              }}
            >
              <Stack spacing={1.8}>
                {[
                  "Soy desarrollador Full Stack con una vision end-to-end del producto: arquitectura backend, logica de negocio, interfaz y experiencia de usuario trabajando en la misma direccion.",
                  "Trabajo especialmente comodo con Java, Spring Boot, Next.js, TypeScript y bases de datos relacionales y no relacionales. Me interesa la arquitectura hexagonal porque obliga a pensar en dominio, casos de uso, adaptadores e infraestructura con limites claros.",
                  "No me interesa solo sacar pantallas: me interesa que el producto tenga una base tecnica que se pueda entender, probar, mantener y ampliar sin rehacerlo todo cada vez que aparece una nueva necesidad.",
                ].map((paragraph) => (
                  <Typography
                    key={paragraph}
                    sx={{
                      color: "rgba(216,225,237,0.74)",
                      fontSize: { xs: "0.98rem", md: "1.05rem" },
                      lineHeight: 1.78,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Stack>

              <Box
                sx={{
                  p: { xs: 2.2, md: 2.6 },
                  border: "1px solid rgba(255,255,255,0.10)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(91,241,196,0.88)",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Mentalidad
                </Typography>
                <Typography
                  sx={{
                    mt: 1.5,
                    color: "rgba(245,247,251,0.92)",
                    fontSize: { xs: "1.18rem", md: "1.34rem" },
                    fontWeight: 900,
                    lineHeight: 1.25,
                  }}
                >
                  Primero entender. Luego decidir. Despues construir.
                </Typography>
                <Typography
                  sx={{
                    mt: 1.8,
                    color: "rgba(216,225,237,0.62)",
                    fontSize: "0.94rem",
                    lineHeight: 1.68,
                  }}
                >
                  Prefiero hacer buenas preguntas, reducir incertidumbre y
                  elegir soluciones que tengan sentido para el producto y para
                  el equipo que lo mantiene.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                borderTop: "1px solid rgba(255,255,255,0.10)",
                borderLeft: { sm: "1px solid rgba(255,255,255,0.10)" },
              }}
            >
              {profilePillars.map((pillar) => (
                <Box
                  key={pillar.label}
                  sx={{
                    p: { xs: 2.2, md: 2.6 },
                    borderRight: "1px solid rgba(255,255,255,0.10)",
                    borderBottom: "1px solid rgba(255,255,255,0.10)",
                    transition:
                      "background-color 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      borderColor: "rgba(91,241,196,0.34)",
                      backgroundColor: "rgba(91,241,196,0.045)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(91,241,196,0.9)",
                      fontSize: "0.78rem",
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {pillar.label}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.2,
                      color: "rgba(216,225,237,0.68)",
                      fontSize: { xs: "0.93rem", md: "0.98rem" },
                      lineHeight: 1.65,
                    }}
                  >
                    {pillar.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {[
                "Java",
                "Spring Boot",
                "Next.js",
                "TypeScript",
                "Arquitectura hexagonal",
                "SOLID",
                "Producto",
                "UX",
              ].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    height: 31,
                    color: "rgba(230,238,248,0.86)",
                    fontSize: "0.74rem",
                    fontWeight: 850,
                    border: "1px solid rgba(255,255,255,0.12)",
                    backgroundColor: "rgba(255,255,255,0.045)",
                  }}
                />
              ))}
            </Stack>

            <Typography
              sx={{
                p: { xs: 2.2, md: 2.8 },
                color: "rgba(245,247,251,0.92)",
                fontSize: { xs: "1.08rem", md: "1.25rem" },
                fontWeight: 850,
                lineHeight: 1.45,
                borderLeft: "1px solid rgba(91,241,196,0.46)",
                background:
                  "linear-gradient(90deg, rgba(91,241,196,0.075), rgba(255,255,255,0.025))",
              }}
            >
              No construyo solo funcionalidades. Construyo sistemas que se
              pueden entender, mantener y hacer crecer.
            </Typography>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
}
