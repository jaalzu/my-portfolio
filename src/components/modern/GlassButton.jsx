import GlassFilter from "@nkzw/liquid-glass";

export default function GlassButton({
  width = "auto",  // Cambiar de 160 a "auto"
  height = "auto", // Cambiar de 148 a "auto"
  borderRadius = 24,
  children,
  intensity = 0.5,
  speed = 1,
  distort = 0.05,
  color = "#ffffff15",
}) {
  return (
    <GlassFilter
      intensity={intensity}
      speed={speed}
      distort={distort}
      color={color}
    >
      <button
        style={{
          width,
          height,
          borderRadius,
          padding: "0.75rem 1.5rem", // Añade padding en vez de tamaño fijo
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    </GlassFilter>
  );
}
