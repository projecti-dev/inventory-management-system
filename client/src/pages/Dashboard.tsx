import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  heading: { fontSize: 28, fontWeight: 700, marginBottom: 8 },
  sub: { color: "#636e72" },
};

export default function Dashboard() {
  return (
    <div>
      <h1 style={styles.heading}>Dashboard</h1>
      <p style={styles.sub}>Welcome to the IT Asset Inventory System.</p>
    </div>
  );
}
