import { useState, useEffect } from "react";

const GITHUB_USERNAME = "Evan-Jiamg";

// 從 GitHub API 抓取使用者的所有公開 repo
function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 每次 component 掛載時抓一次資料
    async function fetchRepos() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`
        );

        // 如果 API 回傳錯誤狀態碼，拋出錯誤
        if (!response.ok) {
          throw new Error("無法取得 GitHub 資料，請稍後再試");
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []); // 空陣列代表只在第一次渲染時執行

  return { repos, isLoading, error };
}

export default useGitHubRepos;