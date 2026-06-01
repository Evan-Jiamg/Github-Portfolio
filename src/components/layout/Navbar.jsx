import { Link, NavLink } from "react-router-dom";

// 頂部導覽列，包含站名與頁面連結
function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>
        Evan Chiang
      </Link>
      <div style={styles.links}>
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          關於我
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          作品集
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#0d1117",
    borderBottom: "1px solid #30363d",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    color: "#58a6ff",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#8b949e",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s",
  },
  activeLink: {
    color: "#f0f6fc",
    fontWeight: "600",
  },
};

export default Navbar;