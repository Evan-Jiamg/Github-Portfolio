import useGitHubRepos from "../hooks/useGitHubRepos";
import ProjectGrid from "../components/projects/ProjectGrid";

// 作品集頁面：呼叫 Custom Hook 抓資料，並處理載入中與錯誤狀態
function ProjectsPage() {
  const { repos, isLoading, error } = useGitHubRepos();

  // 載入中狀態
  if (isLoading) {
    return (
      <div style={styles.centerContainer}>
        <p style={styles.message}>載入中，請稍候...</p>
      </div>
    );
  }

  // 錯誤狀態
  if (error) {
    return (
      <div style={styles.centerContainer}>
        <p style={styles.errorMessage}>⚠ {error}</p>
        <p style={styles.hint}>請確認網路連線後重新整理頁面</p>
      </div>
    );
  }

  // 資料為空狀態
  if (repos.length === 0) {
    return (
      <div style={styles.centerContainer}>
        <p style={styles.message}>目前沒有公開的專案</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>我的作品集</h2>
        <p style={styles.subtitle}>
          以下專案透過 GitHub API 動態載入，點擊卡片可前往 GitHub 查看原始碼
        </p>
      </div>
      <ProjectGrid repos={repos} />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0d1117",
    minHeight: "100vh",
    color: "#f0f6fc",
    paddingBottom: "3rem",
  },
  header: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "2rem 2rem 1.5rem",
    borderBottom: "1px solid #30363d",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#f0f6fc",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#8b949e",
    fontSize: "0.9rem",
  },
  centerContainer: {
    backgroundColor: "#0d1117",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
  },
  message: {
    color: "#8b949e",
    fontSize: "1rem",
  },
  errorMessage: {
    color: "#f85149",
    fontSize: "1rem",
  },
  hint: {
    color: "#8b949e",
    fontSize: "0.85rem",
  },
};

export default ProjectsPage;