// 語言篩選列，讓使用者可以依程式語言過濾 repo
function ProjectFilter({ languages, selectedLanguage, onSelectLanguage }) {
  return (
    <div style={styles.container}>
      {/* 「全部」選項永遠顯示在最前面 */}
      <button
        style={
          selectedLanguage === "全部"
            ? { ...styles.button, ...styles.activeButton }
            : styles.button
        }
        onClick={() => onSelectLanguage("全部")}
      >
        全部
      </button>

      {/* 根據 repos 的語言動態產生篩選按鈕 */}
      {languages.map((language) => (
        <button
          key={language}
          style={
            selectedLanguage === language
              ? { ...styles.button, ...styles.activeButton }
              : styles.button
          }
          onClick={() => onSelectLanguage(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    padding: "0 2rem",
    maxWidth: "960px",
    margin: "0 auto 1.5rem",
  },
  button: {
    backgroundColor: "#21262d",
    color: "#8b949e",
    border: "1px solid #30363d",
    borderRadius: "999px",
    padding: "0.3rem 1rem",
    fontSize: "0.85rem",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  activeButton: {
    backgroundColor: "#388bfd26",
    color: "#58a6ff",
    borderColor: "#58a6ff",
  },
};

export default ProjectFilter;