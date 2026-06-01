import projectDescriptions from "../../constants/projectDescriptions";

// 單一 repo 的卡片元件
function ProjectCard({ repo }) {
  // 從手動說明檔案取得補充資訊，若無則用預設值
  const extra = projectDescriptions[repo.name] || {
    description: repo.description || "暫無說明",
    tags: [],
  };

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      style={styles.card}
    >
      {/* repo 名稱 */}
      <h3 style={styles.repoName}>{repo.name}</h3>

      {/* 中文說明 */}
      <p style={styles.description}>{extra.description}</p>

      {/* 標籤列 */}
      <div style={styles.tagRow}>
        {extra.tags.map((tag) => (
          <span key={tag} style={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* 底部資訊：語言、星星數、更新時間 */}
      <div style={styles.footer}>
        {repo.language && (
          <span style={styles.language}>{repo.language}</span>
        )}
        <span style={styles.meta}>
          更新於 {new Date(repo.updated_at).toLocaleDateString("zh-TW")}
        </span>
      </div>
    </a>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "8px",
    padding: "1.25rem",
    textDecoration: "none",
    transition: "border-color 0.2s",
    cursor: "pointer",
  },
  repoName: {
    color: "#58a6ff",
    fontSize: "1rem",
    fontWeight: "600",
  },
  description: {
    color: "#8b949e",
    fontSize: "0.875rem",
    lineHeight: "1.6",
    flex: 1,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  tag: {
    backgroundColor: "#388bfd26",
    color: "#58a6ff",
    borderRadius: "999px",
    padding: "0.15rem 0.6rem",
    fontSize: "0.75rem",
  },
  footer: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.4rem",
    flexWrap: "wrap",
  },
  language: {
    color: "#f0f6fc",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  meta: {
    color: "#8b949e",
    fontSize: "0.8rem",
  },
};

export default ProjectCard;