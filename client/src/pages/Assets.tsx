import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  heading: { fontSize: 28, fontWeight: 700, marginBottom: 8 },
  sub: { color: "#636e72" },
};

export default function Assets() {
  return (
    <div>
      <h1 style={styles.heading}>All Assets</h1>
      <p style={styles.sub}>Asset list will appear here.</p>
    </div>
  );
}
