// import GlassFilter from "@nkzw/liquid-glass";

// export default function GlassTechBox({
//   size = 60,
//   borderRadius = 20,
//   children,
//   intensity = 0.6,
//   speed = 1.1,
//   distort = 0.3,
//   color = "#ffffff15", // bajo para que el efecto quede suave
// }) {
//   return (
//     <GlassFilter
//       intensity={intensity}
//       speed={speed}
//       distort={distort}
//       color={color}
//     >
//       <div
//         style={{
//           width: size,
//           height: size,
//           borderRadius,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "transparent", // nada debajo
//           border: "none",            // sin marco
//           backdropFilter: "none",    // sin blur extra
//         }}
//       >
//         {children}
//       </div>
//     </GlassFilter>
//   );
// }
import GlassFilter from "@nkzw/liquid-glass";

export default function GlassTechBox({
    height = 30,
    width = 60,
    borderRadius = 10,
  children,
  intensity = 0.6,
  speed = 1.1,
  distort = 0.3,
  color = "#ffffff12",
}) {
  return (
    <GlassFilter intensity={intensity} speed={speed} distort={distort} color={color}>
      <div
        style={{
          width: width,
          height: height,
          borderRadius,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </GlassFilter>
  );
}