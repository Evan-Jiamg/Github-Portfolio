import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

// 應用程式根元件：設定路由與共用導覽列
function App() {
  return (
    <div style={{ backgroundColor: "#0d1117", minHeight: "100vh" }}>
      {/* 所有頁面共用的導覽列 */}
      <Navbar />

      {/* 根據 URL 決定顯示哪個頁面 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;