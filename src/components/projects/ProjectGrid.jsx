import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

// 作品集主體：包含篩選列與 repo 卡片網格
function ProjectGrid({ repos }) {
  const [selectedLanguage, setSelectedLanguage] = useState("全部");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 從所有 repo 中提取不重複的語言清單
  const languages = [
    ...new Set(
      repos
        .map((repo) => repo.language)
        .filter((language) => language !== null)
    ),
  ];

  // 同時套用語言篩選與關鍵字搜尋
  const filteredRepos = repos.filter((repo) => {
    const matchesLanguage =
      selectedLanguage === "全部" || repo.language === selectedLanguage;
    const matchesKeyword = repo.name
      .toLowerCase()
      .includes(searchKeyword.toLowerCase());
    return matchesLanguage && matchesKeyword;
  });

  return (
    <div>
      {/* 搜尋欄 */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="搜尋 repo 名稱..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* 語言篩選列 */}
      <ProjectFilter
        languages={languages}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />

      {/* 結果數量提示 */}
      <p style={styles.resultCount}>
        顯示 {filteredRepos.length} / {repos.length} 個專案
      </p>

      {/* 卡片網格 */}
      {filteredRepos.length > 0 ? (
        <div style={styles.grid}>
          {filteredRepos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <p style={styles.emptyMessage}>找不到符合條件的專案</p>
      )}
    </div>
  );
}

const styles = {
  searchContainer: {
    padding: "0 2rem",
    maxWidth: "960px",
    margin: "0 auto 1rem",
  },
  searchInput: {
    width: "100%",
    padding: "0.6rem 1rem",
    backgroundColor: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: "6px",
    color: "#f0f6fc",
    fontSize: "0.95rem",
    outline: "none",
  },
  resultCount: {
    color: "#8b949e",
    fontSize: "0.85rem",
    padding: "0 2rem",
    maxWidth: "960px",
    margin: "0 auto 1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1rem",
    padding: "0 2rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  emptyMessage: {
    color: "#8b949e",
    textAlign: "center",
    padding: "3rem",
  },
};

export default ProjectGrid;