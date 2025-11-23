import GlassFilter from "@nkzw/liquid-glass";

export default function GlassCard({
  width = 400,
  height = 260,
  borderRadius = 20,
  children,
}) {
  return (
    <GlassFilter intensity={0.6} speed={1.2} distort={0.35} color="#ffffff20">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${borderRadius}px`,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.3)",
          padding: "32px",
        }}
      >
        {children}
      </div>
    </GlassFilter>
  );
}
