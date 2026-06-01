// 首頁的個人介紹區塊
function ProfileHero() {
  return (
    <div style={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/199812596?v=4"
        alt="Evan Chiang 的 GitHub 頭像"
        style={styles.avatar}
      />
      <div style={styles.info}>
        <h1 style={styles.name}>姜明志 Evan Chiang</h1>
        <p style={styles.school}>
          國立陽明交通大學・資訊管理與財務金融學系
        </p>
        <p style={styles.bio}>
          研究方向包含意見動態模擬與社群網路分析（H-COG 框架）。
        </p>
        <div style={styles.badgeRow}>
          {["Python", "Java", "React", "MySQL", "Machine Learning"].map(
            (skill) => (
              <span key={skill} style={styles.badge}>
                {skill}
              </span>
            )
          )}
        </div>
        <a
          href="https://github.com/Evan-Jiamg"
          target="_blank"
          rel="noreferrer"
          style={styles.githubLink}
        >
          前往 GitHub 個人頁面
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: "2rem",
    padding: "3rem 2rem",
    maxWidth: "860px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "3px solid #30363d",
  },
  info: {
    flex: 1,
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  name: {
    fontSize: "1.8rem",
    color: "#f0f6fc",
    fontWeight: "700",
  },
  school: {
    color: "#8b949e",
    fontSize: "0.95rem",
  },
  bio: {
    color: "#c9d1d9",
    fontSize: "0.95rem",
    lineHeight: "1.7",
  },
  badgeRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.4rem",
  },
  badge: {
    backgroundColor: "#21262d",
    color: "#58a6ff",
    border: "1px solid #30363d",
    borderRadius: "999px",
    padding: "0.2rem 0.75rem",
    fontSize: "0.8rem",
  },
  githubLink: {
    color: "#58a6ff",
    fontSize: "0.9rem",
    textDecoration: "none",
    marginTop: "0.4rem",
  },
};

export default ProfileHero;