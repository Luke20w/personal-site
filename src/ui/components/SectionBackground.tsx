export default function SectionBackground({ image }: { image: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
        minWidth: 1000,
      }}
    />
  );
}
