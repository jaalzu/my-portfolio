import GlassFilter from "@nkzw/liquid-glass";

export default function Hero() {
  return (
    <GlassFilter
      intensity={0.5}
      speed={1.1}
      distort={0.35}
      color="#ffffff20"
    >
      <div className="hero">
        <h1>React</h1>
      </div>
    </GlassFilter>
  );
}


