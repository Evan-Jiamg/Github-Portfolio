import ProfileHero from "../components/profile/ProfileHero";

// 首頁：顯示個人介紹
function HomePage() {
  return (
    <div style={styles.container}>
      <ProfileHero />

      {/* 關於我的補充說明區塊 */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>研究與經歷</h2>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🔬 H-COG 研究</h3>
          <p style={styles.cardText}>
            在陳柏安教授指導下，研究混合共演化意見賽局（H-COG）框架，
            探討社群網路中的回音室效應與意見動態形成機制。
            使用 Python 進行 Agent Simulation，並透過 Pushshift Reddit Dataset 進行實證分析。
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>💼 實習準備</h3>
          <p style={styles.cardText}>
            前往資創中心，在王釧茹教授實驗室進行暑期研究，
            方向聚焦於量化金融（Lattice 模型、衍生品定價、風險管理）與資料分析（文字探勘、推薦系統）。
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🛠 技術棧</h3>
          <p style={styles.cardText}>
            Python・C++・JavaScript / React・MySQL・
            scikit-learn・TensorFlow / Keras・
            LLM Prompting・Agent-based Simulation
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0d1117",
    minHeight: "100vh",
    color: "#f0f6fc",
  },
  section: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 2rem 3rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    color: "#f0f6fc",
    fontWeight: "600",
    marginBottom: "0.5rem",
    borderBottom: "1px solid #30363d",
    paddingBottom: "0.5rem",
  },
  card: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "8px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  cardTitle: {
    color: "#f0f6fc",
    fontSize: "1rem",
    fontWeight: "600",
  },
  cardText: {
    color: "#8b949e",
    fontSize: "0.9rem",
    lineHeight: "1.7",
  },
};

export default HomePage;