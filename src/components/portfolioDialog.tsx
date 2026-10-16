"use client";

import { useId, type ReactNode } from "react";
import { Dialog } from "@mui/material";
import Close from "@mui/icons-material/Close";

export default function PortfolioDialog({ open, onClose, eyebrow, title, children }: { open: boolean; onClose: () => void; eyebrow: string; title: string; children: ReactNode }) {
  const titleId = useId();
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby={titleId} fullWidth maxWidth="lg" scroll="paper" slotProps={{ paper: { className: "portfolio-dialog", sx: { m: { xs: 1.5, sm: 4 }, width: { xs: "calc(100% - 24px)", sm: "calc(100% - 64px)" }, maxWidth: 1100, maxHeight: "calc(100dvh - 48px)", color: "#edf3f2", background: "#10191b", border: "1px solid #30413e", borderRadius: "20px", overflow: "hidden" } }, backdrop: { sx: { background: "rgba(3, 9, 10, .8)", backdropFilter: "blur(8px)" } } }}>
      <div className="dialog-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={titleId}>{title}</h2>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Cerrar ventana">
          <Close />
        </button>
      </div>
      <div className="dialog-body" tabIndex={0} role="region" aria-label={`Contenido de ${title}`}>{children}</div>
    </Dialog>
  );
}
