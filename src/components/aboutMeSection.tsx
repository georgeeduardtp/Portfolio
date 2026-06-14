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
          gridTemplateColumns: { xs: "1fr", md: "minmax(420px, 0.92fr) minmax(0, 1fr)" },
          gap: { xs: 3, md: 7 },
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
              color: "rgba(245, 247, 251, 0.96)",
              fontSize: { xs: "2rem", md: "4rem" },
              fontWeight: 900,
              lineHeight: { xs: 1.03, md: 0.98 },
              letterSpacing: 0,
            }}
          >
            Perfil full stack con criterio de producto.
          </Typography>

          <Stack spacing={{ xs: 1.4, md: 1.75 }} sx={{ mt: { xs: 2, md: 3 } }}>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.72)",
                fontSize: { xs: "0.98rem", md: "1.14rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Construyo software mantenible desde la arquitectura backend hasta
              la experiencia de usuario.
            </Typography>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.62)",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Me interesa que cada decision tecnica tenga sentido para el
              producto: sistemas claros, escalables y preparados para crecer.
            </Typography>
            <Typography
              sx={{
                color: "rgba(216, 225, 237, 0.62)",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: { xs: 1.62, md: 1.75 },
              }}
            >
              Me gusta trabajar en equipo, aprender de perfiles con mas
              experiencia y aprovechar cada proyecto para mejorar mi criterio
              tecnico y profesional.
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
            width: { xs: "calc(100% - 28px)", md: "760px" },
            m: 0,
            overflow: "hidden",
            color: "rgba(245, 247, 251, 0.94)",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(145deg, rgba(10,15,23,0.98), rgba(5,7,10,0.98))",
            boxShadow: "0 34px 120px rgba(0,0,0,0.62)",
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
          sx={{
            position: "relative",
            p: { xs: 3, md: 5 },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at 12% 0%, rgba(91,241,196,0.14), transparent 36%)",
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

          <Box sx={{ position: "relative", zIndex: 1, pr: { xs: 4, md: 5 } }}>
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
              Como trabajo y que aporto
            </Typography>
          </Box>

          <Stack
            spacing={2}
            sx={{ position: "relative", zIndex: 1, mt: { xs: 3, md: 4 } }}
          >
            {[
              "Soy desarrollador Full Stack con una vision end-to-end del producto: arquitectura backend, logica de negocio, interfaz y experiencia de usuario trabajando en la misma direccion.",
              "Me gusta construir software que no sea solo una demo visual, sino una base mantenible y escalable. Presto atencion a la claridad del codigo, las decisiones de arquitectura y la forma en la que cada pieza aporta valor real al producto.",
              "Trabajo especialmente comodo en entornos Java/Spring, Next.js, TypeScript y bases de datos relacionales y no relacionales, aplicando principios como SOLID, arquitectura hexagonal y separacion clara de responsabilidades.",
              "Me gusta trabajar en equipo, escuchar otros puntos de vista y aprender de personas con mas experiencia. Intento aportar claridad, hacer buenas preguntas y mantener una comunicacion directa para que el trabajo avance mejor.",
              "Soy autocritico y autodidacta: reviso mis decisiones, busco entender el por que de las cosas y aprovecho cada proyecto, tecnologia o problema nuevo como una oportunidad para ganar experiencia real.",
              "A nivel profesional, valoro la comunicacion clara, la resolucion analitica de problemas, la responsabilidad sobre el trabajo propio y la capacidad de adaptarme rapido cuando el proyecto lo necesita.",
            ].map((paragraph) => (
              <Typography
                key={paragraph}
                sx={{
                  color: "rgba(216,225,237,0.72)",
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                  lineHeight: 1.75,
                }}
              >
                {paragraph}
              </Typography>
            ))}

            <Typography
              sx={{
                pt: 2,
                mt: 1,
                color: "rgba(245,247,251,0.92)",
                fontSize: { xs: "1.08rem", md: "1.25rem" },
                fontWeight: 850,
                lineHeight: 1.45,
                borderTop: "1px solid rgba(255,255,255,0.10)",
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
