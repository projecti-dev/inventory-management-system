import { Outlet, NavLink } from "react-router-dom";
import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: 220,
    backgroundColor: "#2d3436",
    color: "white",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 32,
    position: "fixed",
    height: "100vh",
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: "#74b9ff",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  navLink: {
    padding: "10px 14px",
    borderRadius: 8,
    color: "#b2bec3",
    fontSize: 15,
    cursor: "pointer",
  },
  navLinkActive: {
    padding: "10px 14px",
    borderRadius: 8,
    backgroundColor: "#0984e3",
    color: "white",
    fontSize: 15,
    cursor: "pointer",
  },
  main: {
    marginLeft: 220,
    padding: 32,
    flex: 1,
  },
};

export default function Layout() {
  const getLinkStyle = ({ isActive }: { isActive: boolean }): CSSProperties =>
    isActive ? styles.navLinkActive : styles.navLink;

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>IT Assets</div>
        <nav style={styles.nav}>
          <NavLink to="/" end style={getLinkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/assets" style={getLinkStyle}>
            Assets
          </NavLink>
          <NavLink to="/assets/new" style={getLinkStyle}>
            + Add Asset
          </NavLink>
        </nav>
      </aside>
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
