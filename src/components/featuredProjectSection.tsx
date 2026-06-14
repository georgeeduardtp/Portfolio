import {
  ArrowForward,
  Badge,
  CalendarMonth,
  EventAvailable,
  Map,
  Palette,
  PersonSearch,
  Schedule,
  Storefront,
} from "@mui/icons-material";
import { Box, Button, Chip, GlobalStyles, Stack, Typography } from "@mui/material";

const projectHighlights = [
  "SaaS B2B2C para busqueda y reserva de servicios de estetica.",
  "Diseno integral del producto, desde la experiencia de usuario hasta la estructura visual.",
  "Arquitectura hexagonal y enfoque desacoplado para facilitar mantenimiento.",
  "Aislamiento multitenant con datos separados por negocio.",
  "Identidad global, RBAC y API REST para conectar la operativa del producto.",
];

const projectTags = [
  "Java",
  "Spring Boot",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Multitenancy",
  "RBAC",
];

const productFlow = [
  "Descubre",
  "Compara",
  "Reserva",
  "Gestiona",
];

const productModules = [
  {
    icon: Storefront,
    label: "Escaparate publico",
    helper: "Perfil visible para cada negocio",
  },
  {
    icon: CalendarMonth,
    label: "Reservas",
    helper: "Citas conectadas con servicios",
  },
  {
    icon: Badge,
    label: "Empleados",
    helper: "Equipo, permisos y asignaciones",
  },
  {
    icon: Schedule,
    label: "Horarios",
    helper: "Jornadas, descansos y disponibilidad",
  },
  {
    icon: EventAvailable,
    label: "Disponibilidad",
    helper: "Slots calculados para reservar",
  },
  {
    icon: Palette,
    label: "Branding",
    helper: "Logo, colores e identidad propia",
  },
  {
    icon: Map,
    label: "Mapas",
    helper: "Ubicacion exacta del negocio",
  },
  {
    icon: PersonSearch,
    label: "Clientes",
    helper: "Identidad unica para la red",
  },
];

export default function FeaturedProjectSection() {
  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes productCorePulse": {
            "0%, 100%": {
              boxShadow:
                "0 0 70px rgba(91,241,196,0.12), inset 0 0 24px rgba(91,241,196,0.08)",
            },
            "50%": {
              boxShadow:
                "0 0 105px rgba(91,241,196,0.24), inset 0 0 34px rgba(91,241,196,0.14)",
            },
          },
          "@keyframes productSignalDot": {
            "0%": {
              transform: "translateX(-120%)",
              opacity: 0,
            },
            "18%": {
              opacity: 1,
            },
            "82%": {
              opacity: 1,
            },
            "100%": {
              transform: "translateX(320%)",
              opacity: 0,
            },
          },
          "@keyframes productSignalDotReverse": {
            "0%": {
              transform: "translateX(320%)",
              opacity: 0,
            },
            "18%": {
              opacity: 1,
            },
            "82%": {
              opacity: 1,
            },
            "100%": {
              transform: "translateX(-120%)",
              opacity: 0,
            },
          },
        }}
      />

      <Box
        component="section"
        aria-labelledby="featured-project-heading"
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "100vw",
          px: { xs: 2, md: 3 },
          py: { xs: 8, md: 7 },
          minHeight: { md: "100vh" },
          display: { md: "flex" },
          alignItems: { md: "center" },
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1320,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" },
          gap: { xs: 5, md: 6 },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 560, md: 470 },
            p: { xs: 2.5, md: 2.5 },
            order: { xs: 2, md: 0 },
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "radial-gradient(circle at 50% 34%, rgba(91,241,196,0.16), transparent 28%), radial-gradient(circle at 80% 78%, rgba(143,183,255,0.10), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            "&::before": {
              display: "none",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 9px)",
              opacity: 0.7,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1, height: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: { xs: 3, md: 2.2 } }}
            >
              <Typography
                sx={{
                  color: "rgba(91,241,196,0.86)",
                  fontSize: "0.72rem",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                Product map
              </Typography>
              <Typography
                sx={{
                  color: "rgba(216,225,237,0.54)",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                MVP real
              </Typography>
            </Stack>

            <Box
              sx={{
                position: "relative",
                display: "grid",
                placeItems: "center",
                minHeight: { xs: 250, md: 165 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: 110, md: 146 },
                  right: { xs: "calc(50% + 50px)", md: "calc(50% + 58px)" },
                  zIndex: 0,
                  height: "1px",
                  overflow: "hidden",
                  transform: "translateY(-50%)",
                  background:
                    "linear-gradient(90deg, rgba(91,241,196,0.16), rgba(91,241,196,0.42))",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 36,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(91,241,196,0.95), transparent)",
                    animation: "productSignalDot 3.4s ease-in-out infinite",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "calc(50% + 50px)", md: "calc(50% + 58px)" },
                  right: { xs: 110, md: 146 },
                  zIndex: 0,
                  height: "1px",
                  overflow: "hidden",
                  transform: "translateY(-50%)",
                  background:
                    "linear-gradient(90deg, rgba(143,183,255,0.42), rgba(143,183,255,0.16))",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 36,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(143,183,255,0.9), transparent)",
                    animation: "productSignalDotReverse 3.4s ease-in-out infinite",
                  },
                }}
              />

              {[
                {
                  label: "Cliente",
                  text: "Encuentra negocios, consulta servicios y reserva.",
                  side: "left",
                },
                {
                  label: "Negocio",
                  text: "Configura su perfil, equipo, horarios y citas.",
                  side: "right",
                },
              ].map((side) => (
                <Box
                  key={side.label}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: side.side === "left" ? { xs: 0, md: 8 } : "auto",
                    right: side.side === "right" ? { xs: 0, md: 8 } : "auto",
                    width: { xs: 108, sm: 132, md: 138 },
                    p: { xs: 1.15, sm: 1.4, md: 1.35 },
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(5,7,10,0.52)",
                    backdropFilter: "blur(12px)",
                    transform: "translateY(-50%)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgba(245,247,251,0.9)",
                      fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.94rem" },
                      fontWeight: 900,
                    }}
                  >
                    {side.label}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "none", sm: "block" },
                      mt: 1,
                      color: "rgba(216,225,237,0.62)",
                      fontSize: { xs: "0.68rem", sm: "0.78rem", md: "0.78rem" },
                      lineHeight: { xs: 1.38, md: 1.42 },
                    }}
                  >
                    {side.text}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  width: { xs: 88, sm: 104, md: 104 },
                  aspectRatio: "1 / 1",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "50%",
                  border: "1px solid rgba(91,241,196,0.34)",
                  background:
                    "radial-gradient(circle, rgba(91,241,196,0.12), rgba(5,7,10,0.72) 58%)",
                  boxShadow: "0 0 90px rgba(91,241,196,0.13)",
                  animation: "productCorePulse 5.2s ease-in-out infinite",
                }}
              >
                <Box
                  component="img"
                  src="/pelugo512x512.png"
                  alt="Pelu Go"
                  sx={{
                    width: "58%",
                    height: "58%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
                mt: { xs: 2.2, md: 2.8 },
                overflow: "hidden",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {productFlow.map((step, index) => (
                <Box
                  key={step}
                  sx={{
                    position: "relative",
                    py: { xs: 1.4, md: 1 },
                    textAlign: "center",
                    color:
                      index === 2
                        ? "rgba(91,241,196,0.88)"
                        : "rgba(216,225,237,0.66)",
                    fontSize: { xs: "0.68rem", md: "0.66rem" },
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    borderLeft:
                      index === 0 ? 0 : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {step}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                mt: { xs: 3, md: 2.3 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
                gap: { xs: 1.2, md: 0 },
                borderTop: 0,
                borderLeft: 0,
              }}
            >
              {productModules.map((module, index) => (
                <Box
                  key={module.label}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "34px minmax(0, 1fr)", md: "1fr" },
                    gap: { xs: 1.2, md: 0.8 },
                    alignItems: "start",
                    py: { xs: 1.1, md: 1 },
                    px: { xs: 1.2, md: 1 },
                    borderTop: { xs: "1px solid rgba(255,255,255,0.08)", md: 0 },
                    borderRight: 0,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    borderLeft: {
                      md:
                        [1, 2, 3, 5, 6, 7].includes(index)
                          ? "1px solid rgba(255,255,255,0.07)"
                          : 0,
                    },
                    transition:
                      "background-color 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      backgroundColor: "rgba(91,241,196,0.045)",
                      borderBottomColor: "rgba(91,241,196,0.22)",
                    },
                    "&:hover .module-icon": {
                      color: "rgba(5,7,10,0.95)",
                      backgroundColor: "rgba(91,241,196,0.86)",
                      borderColor: "rgba(91,241,196,0.86)",
                    },
                    "&:hover .module-helper": {
                      color: "rgba(216,225,237,0.76)",
                    },
                  }}
                >
                  <Box
                    className="module-icon"
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      width: 28,
                      height: 28,
                      color: "rgba(91,241,196,0.82)",
                      backgroundColor: "rgba(91,241,196,0.07)",
                      border: "1px solid rgba(91,241,196,0.14)",
                      transition:
                        "color 180ms ease, background-color 180ms ease, border-color 180ms ease",
                    }}
                  >
                      <module.icon sx={{ fontSize: 15 }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "rgba(245,247,251,0.84)",
                        fontSize: { xs: "0.78rem", md: "0.7rem" },
                        fontWeight: 900,
                        lineHeight: 1.15,
                      }}
                    >
                      {module.label}
                    </Typography>
                    <Typography
                      className="module-helper"
                      sx={{
                        mt: 0.45,
                        color: "rgba(216,225,237,0.52)",
                        fontSize: { xs: "0.72rem", md: "0.62rem" },
                        lineHeight: 1.28,
                        transition: "color 180ms ease",
                      }}
                    >
                      {module.helper}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ order: { xs: 1, md: 0 } }}>
          <Typography
            component="p"
            sx={{
              mb: 1.5,
              color: "rgba(91, 241, 196, 0.86)",
              fontSize: "0.78rem",
              fontWeight: 900,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Proyecto destacado
          </Typography>

          <Box
            id="featured-project-heading"
            component="h2"
            sx={{
              m: 0,
              width: { xs: 170, md: 240 },
              maxWidth: "100%",
            }}
          >
            <Box
              component="img"
              src="/logoPelugo.png"
              alt="Pelu Go"
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.32))",
              }}
            />
          </Box>

          <Typography
            sx={{
              maxWidth: 680,
              mt: 1,
              color: "rgba(216,225,237,0.72)",
              fontSize: { xs: "1rem", md: "1.06rem" },
              lineHeight: { xs: 1.75, md: 1.62 },
            }}
          >
            Plataforma escalable disenada como un ecosistema unificado para la
            busqueda y reserva de servicios de estetica. Un proyecto pensado
            para conectar clientes y negocios desde una identidad digital unica.
          </Typography>

          <Stack spacing={{ xs: 1.35, md: 1 }} sx={{ mt: { xs: 3.5, md: 2.6 } }}>
            {projectHighlights.map((highlight) => (
              <Typography
                key={highlight}
                sx={{
                  pt: { xs: 1.35, md: 1 },
                  color: "rgba(216,225,237,0.72)",
                  fontSize: { xs: "0.95rem", md: "0.92rem" },
                  lineHeight: { xs: 1.6, md: 1.45 },
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {highlight}
              </Typography>
            ))}
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: { xs: 3.5, md: 2.8 } }}>
            {projectTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  height: 30,
                  color: "rgba(230,238,248,0.82)",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  border: "1px solid rgba(255,255,255,0.10)",
                  backgroundColor: "rgba(255,255,255,0.045)",
                }}
              />
            ))}
          </Stack>

          <Button
            endIcon={<ArrowForward />}
            sx={{
              mt: 4,
              px: 0,
              color: "rgba(91,241,196,0.9)",
              fontSize: "0.82rem",
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              "&:hover": {
                color: "rgba(245,247,251,0.96)",
                backgroundColor: "transparent",
              },
            }}
          >
            Ver caso completo proximamente
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  );
}
