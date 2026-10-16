"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ArrowForward, Close } from "@mui/icons-material";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const messages = [
  {
    eyebrow: "Bienvenido",
    text: "Soy George Eduard Turcescu. Este es mi portfolio personal, un espacio donde presento mi perfil como desarrollador Full Stack y mi forma de construir producto.",
  },
  {
    eyebrow: "Qué vas a encontrar",
    text: "Aquí puedes ver mi experiencia, formación, habilidades profesionales y proyectos destacados como Pelu Go, donde combino arquitectura, criterio técnico, UX y software mantenible.",
  },
];

export default function WelcomeOverlay() {
  const [step, setStep] = useState(0);
  const reducedMotion = useReducedMotion();
  const isVisible = step < messages.length;
  const currentMessage = messages[step];

  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setStep(messages.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isVisible]);

  const handleAdvance = () => {
    setStep((current) => current + 1);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          component={motion.div}
          className="welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeOut" }}
          onClick={handleAdvance}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            pointerEvents: "auto",
            cursor: "pointer",
            backgroundColor: "rgba(3, 5, 8, 0.42)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
            role="region"
            aria-label="Bienvenida al portfolio"
            sx={{
              position: "absolute",
              pointerEvents: "auto",
              right: { xs: 18, md: 56 },
              bottom: { xs: 290, md: 360 },
              width: { xs: "calc(100% - 36px)", sm: 420, md: 470 },
              p: { xs: 2.2, md: 2.8 },
              maxHeight: { xs: "calc(100dvh - 320px)", md: "calc(100dvh - 390px)" },
              overflowY: "auto",
              overscrollBehavior: "contain",
              borderRadius: "14px",
              color: "rgba(245,247,251,0.94)",
              border: "1px solid rgba(255,255,255,0.14)",
              background:
                  "linear-gradient(145deg, rgba(13,22,21,0.97), rgba(7,12,13,0.96))",
              backdropFilter: "blur(12px)",
              boxShadow: "0 28px 90px rgba(0,0,0,0.5)",
              "@media (max-height: 500px)": {
                bottom: 16,
                right: 16,
                width: "min(470px, calc(100vw - 156px))",
                maxHeight: "calc(100dvh - 32px)",
              },
            }}
          >
            <Box
              component="button"
              type="button"
              aria-label="Cerrar bienvenida"
              onClick={(event) => {
                event.stopPropagation();
                setStep(messages.length);
              }}
              sx={{ position: "absolute", top: 8, right: 8, width: 44, height: 44, display: "grid", placeItems: "center", border: 0, borderRadius: "50%", background: "transparent", color: "#b8cdc1", cursor: "pointer", "&:hover": { color: "#83edbf", background: "#83edbf12" } }}
            ><Close fontSize="small" /></Box>
            <AnimatePresence mode="wait">
              <Box
                key={step}
                component={motion.div}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
                aria-live="polite"
                aria-atomic="true"
              >
                <Typography
                  sx={{
                    mb: 1.2,
                    pr: 5,
                    color: "rgba(91,241,196,0.9)",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {currentMessage.eyebrow}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(226,235,246,0.86)",
                    fontSize: { xs: "0.98rem", md: "1.06rem" },
                    fontWeight: 650,
                    lineHeight: 1.65,
                  }}
                >
                  {currentMessage.text}
                </Typography>
              </Box>
            </AnimatePresence>
            <Typography sx={{ mt: 1.8, color: "#a2b3ae", fontSize: "11px", lineHeight: 1.5 }}>Pulsa en cualquier parte para continuar</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mt: 2 }}>
              <Typography sx={{ color: "#a2b3ae", font: "11px Consolas, monospace" }}>{step + 1} / {messages.length}</Typography>
              <Box component="button" type="button" onClick={(event) => { event.stopPropagation(); handleAdvance(); }} sx={{ minHeight: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1.5, px: 2, border: "1px solid #83edbf55", borderRadius: "7px", background: "#83edbf12", color: "#83edbf", font: "inherit", fontSize: "12px", cursor: "pointer", "&:hover": { background: "#83edbf24" } }}>
                {step === messages.length - 1 ? "Explorar portfolio" : "Siguiente"}<ArrowForward fontSize="small" />
              </Box>
            </Box>
          </Box>

          <Box
            component={motion.img}
            src="/avatarBienvenida.png"
            alt="Avatar de bienvenida de George Eduard Turcescu"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: reducedMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              position: "absolute",
              right: { xs: 22, md: 70 },
              bottom: 0,
              width: { xs: 188, sm: 188, md: 230 },
              height: "auto",
              filter: "drop-shadow(0 24px 46px rgba(0,0,0,0.58)) drop-shadow(0 0 34px rgba(91,241,196,0.12))",
              "@media (max-height: 500px)": { left: 12, right: "auto", width: 120 },
            }}
          />
        </Box>
      )}
    </AnimatePresence>
  );
}
