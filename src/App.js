import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import ArticlesListPage from "./Pages/ArticlesListPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPage from "./Pages/LoginPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/articles" element={<ArticlesListPage />}></Route>
            <Route path="/articles/:articleId" element={<ArticlePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/create-account" element={<CreateAccountPage/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


