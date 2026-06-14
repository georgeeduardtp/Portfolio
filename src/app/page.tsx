"use client";

import { useEffect } from "react";
import { Box, GlobalStyles, Typography } from "@mui/material";
import Lenis from "lenis";

const marqueeItems = [
  "Java",
  "Spring Boot",
  "Arquitectura Hexagonal",
  "DDD",
  "SOLID",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "REST API",
  "GraphQL",
  "Docker",
  "CI/CD",
  "Clean Code",
  "SaaS B2B2C",
  "Multitenancy",
  "RBAC",
];

export default function Home() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.86,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            width: "100%",
            overflowX: "hidden",
            overscrollBehavior: "none",
          },
          body: {
            width: "100%",
            overflowX: "hidden",
            overscrollBehavior: "none",
          },
          "@keyframes profileLightSweep": {
            "0%, 12%": {
              transform: "rotate(-70deg)",
              opacity: 0,
            },
            "22%": {
              opacity: 0.9,
            },
            "46%": {
              transform: "rotate(110deg)",
              opacity: 0.55,
            },
            "58%, 100%": {
              transform: "rotate(150deg)",
              opacity: 0,
            },
          },
          "@keyframes heroNameReveal": {
            "0%": {
              opacity: 0,
              transform: "translateY(22px)",
              filter: "blur(8px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
              filter: "blur(0)",
            },
          },
          "@keyframes heroNameGradient": {
            "0%": {
              backgroundPosition: "0% 52%",
            },
            "28%": {
              backgroundPosition: "72% 48%",
            },
            "46%": {
              backgroundPosition: "100% 54%",
            },
            "73%": {
              backgroundPosition: "38% 46%",
            },
            "100%": {
              backgroundPosition: "0% 52%",
            },
          },
          "@keyframes marqueeScroll": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-50%)",
            },
          },
        }}
      />

      <Box
        component="main"
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          overflowY: "visible",
          overscrollBehavior: "none",
          touchAction: "pan-y",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 0,
          py: { xs: 8, md: 10 },
          color: "#f5f7fb",
          backgroundColor: "#05070a",
          backgroundImage: `
            radial-gradient(circle at 18% 18%, rgba(64, 145, 255, 0.16), transparent 30%),
            radial-gradient(circle at 82% 12%, rgba(91, 241, 196, 0.12), transparent 28%),
            radial-gradient(circle at 50% 92%, rgba(255, 255, 255, 0.055), transparent 34%),
            linear-gradient(135deg, #05070a 0%, #0a0f17 48%, #05070a 100%)
          `,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.36,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 82%)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `
              radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.34) 72%, rgba(0,0,0,0.72) 100%),
              repeating-linear-gradient(135deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 8px)
            `,
            mixBlendMode: "screen",
            opacity: 0.55,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 1180,
            mx: "auto",
            px: { xs: 3, md: 6 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1fr) minmax(300px, 340px)",
            },
            gap: { xs: 5, md: 10 },
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
              mb: 2,
              color: "rgba(91, 241, 196, 0.86)",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mx: { xs: "auto", md: 0 },
            }}
          >
              Full Stack Software Developer
            </Typography>

            <Typography
              variant="h1"
              sx={{
              maxWidth: 760,
              mx: { xs: "auto", md: 0 },
              my: 0,
              fontSize: { xs: "3rem", sm: "4.15rem", md: "5.2rem", lg: "5.9rem" },
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: 0,
              color: "transparent",
              backgroundImage:
                "linear-gradient(105deg, #f7f9fd 0%, #ffffff 24%, #5bf1c4 48%, #8fb7ff 68%, #f7f9fd 100%)",
              backgroundSize: "220% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              animation:
                "heroNameReveal 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both, heroNameGradient 11s cubic-bezier(0.45, 0, 0.15, 1) 900ms infinite",
              "& span": {
                display: "block",
              },
            }}
          >
              <span>George Eduard</span>
              <span>Turcescu</span>
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                mt: 3,
                mx: { xs: "auto", md: 0 },
                color: "rgba(216, 225, 237, 0.74)",
                fontSize: { xs: "1.08rem", md: "1.24rem" },
                lineHeight: 1.75,
              }}
            >
              Desarrollo productos digitales con foco en arquitectura backend,
              interfaces modernas y software mantenible.
            </Typography>
          </Box>

          <Box
            sx={{
              justifySelf: { xs: "center", md: "end" },
              position: "relative",
              width: { xs: "min(68vw, 245px)", sm: 280, md: 340 },
              aspectRatio: "1 / 1",
              overflow: "hidden",
              borderRadius: "50%",
              p: "2px",
              background:
                "linear-gradient(145deg, rgba(91,241,196,0.85), rgba(64,145,255,0.28), rgba(255,255,255,0.12))",
              boxShadow:
                "0 34px 90px rgba(0,0,0,0.52), 0 0 80px rgba(91,241,196,0.10)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: "-36%",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 118deg, rgba(255,255,255,0.95) 136deg, rgba(91,241,196,0.72) 148deg, transparent 170deg, transparent 360deg)",
                filter: "blur(1px)",
                animation: "profileLightSweep 5.8s ease-in-out infinite",
              },
            }}
          >
            <Box
              component="img"
              src="/profile.jpeg"
              alt="George Eduard Turcescu"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 34%",
                borderRadius: "50%",
                border: "10px solid rgba(5, 7, 10, 0.92)",
              }}
            />
          </Box>
        </Box>

        <Box
          component="section"
          aria-label="Stack tecnico"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100vw",
            mt: { xs: 7, md: 9 },
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.018), rgba(91,241,196,0.035), rgba(255,255,255,0.018))",
            boxShadow:
              "0 -18px 60px rgba(0,0,0,0.22), 0 18px 60px rgba(0,0,0,0.22)",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              zIndex: 2,
              width: { xs: 56, md: 150 },
              pointerEvents: "none",
            },
            "&::before": {
              left: 0,
              background:
                "linear-gradient(90deg, #05070a 0%, rgba(5,7,10,0.82) 34%, transparent 100%)",
            },
            "&::after": {
              right: 0,
              background:
                "linear-gradient(270deg, #05070a 0%, rgba(5,7,10,0.82) 34%, transparent 100%)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              py: { xs: 1.7, md: 2.1 },
              animation: "marqueeScroll 34s linear infinite",
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <Box
                component="span"
                key={`${item}-${index}`}
                sx={{
                  position: "relative",
                  flex: "0 0 auto",
                  px: { xs: 2.25, md: 3.5 },
                  color: "rgba(226, 235, 246, 0.82)",
                  fontSize: { xs: "0.78rem", md: "0.9rem" },
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    right: -3,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "rgba(91, 241, 196, 0.82)",
                    boxShadow: "0 0 18px rgba(91, 241, 196, 0.45)",
                    transform: "translateY(-50%)",
                  },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
