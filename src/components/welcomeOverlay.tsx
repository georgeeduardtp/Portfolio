"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

const messages = [
  {
    eyebrow: "Bienvenido",
    text: "Soy George Eduard Turcescu. Este es mi portfolio personal, un espacio donde presento mi perfil como desarrollador Full Stack y mi forma de construir producto.",
  },
  {
    eyebrow: "Que vas a encontrar",
    text: "Aqui puedes ver mi experiencia, formacion, habilidades profesionales y proyectos destacados como Pelu Go, donde combino arquitectura, criterio tecnico, UX y software mantenible.",
  },
];

export default function WelcomeOverlay() {
  const [step, setStep] = useState(0);
  const isVisible = step < messages.length;
  const currentMessage = messages[step];

  const handleAdvance = () => {
    setStep((current) => current + 1);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={handleAdvance}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            cursor: "pointer",
            backgroundColor: "rgba(3, 5, 8, 0.42)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              position: "absolute",
              right: { xs: 18, md: 56 },
              bottom: { xs: 196, md: 260 },
              width: { xs: "calc(100vw - 36px)", sm: 420, md: 470 },
              p: { xs: 2.2, md: 2.8 },
              color: "rgba(245,247,251,0.94)",
              border: "1px solid rgba(255,255,255,0.14)",
              background:
                "linear-gradient(145deg, rgba(8,13,20,0.92), rgba(5,7,10,0.84))",
              boxShadow: "0 28px 90px rgba(0,0,0,0.5)",
            }}
          >
            <AnimatePresence mode="wait">
              <Box
                key={step}
                component={motion.div}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Typography
                  sx={{
                    mb: 1.2,
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
                <Typography
                  sx={{
                    mt: 1.8,
                    color: "rgba(216,225,237,0.46)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Click para continuar
                </Typography>
              </Box>
            </AnimatePresence>
          </Box>

          <Box
            component={motion.img}
            src="/avatarBienvenida.png"
            alt="Avatar de bienvenida de George Eduard Turcescu"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              position: "absolute",
              right: { xs: 22, md: 70 },
              bottom: 0,
              width: { xs: 188, sm: 188, md: 230 },
              height: "auto",
              filter: "drop-shadow(0 24px 46px rgba(0,0,0,0.58)) drop-shadow(0 0 34px rgba(91,241,196,0.12))",
            }}
          />
        </Box>
      )}
    </AnimatePresence>
  );
}
