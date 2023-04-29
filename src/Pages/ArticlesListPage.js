import ArticleList from "../components/ArticlesList";
import articles from "./article-content";
function ArticleListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles}/>
    </>
  );
}

export default ArticleListPage;
