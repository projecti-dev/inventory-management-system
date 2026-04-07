import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  heading: { fontSize: 28, fontWeight: 700, marginBottom: 8 },
  sub: { color: "#636e72" },
};

export default function AddAsset() {
  return (
    <div>
      <h1 style={styles.heading}>Add New Asset</h1>
      <p style={styles.sub}>Form will appear here.</p>
    </div>
  );
}
