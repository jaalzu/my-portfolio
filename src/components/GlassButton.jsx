import GlassFilter from "@nkzw/liquid-glass";

export default function GlassButton({
  width = 360,
  height = 418,
  borderRadius = 24,
  children,
  intensity = 0.5,
  speed = 1,
  distort = 0.25,
  color = "#ffffff15", // bajito para que no opaque
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",  // sin fondo
          border: "none",             // sin borde
          color: "#fff",
          fontSize: "1rem",
          cursor: "pointer",
          backdropFilter: "none",      // MUY importante: sin blur extra
        }}
      >
        {children}
      </button>
    </GlassFilter>
  );
}
