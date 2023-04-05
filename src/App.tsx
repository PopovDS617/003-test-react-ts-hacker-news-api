import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostListPage } from './pages/PostListPage';
import { SinglePostPage } from './pages/SinglePostPage';
import Header from './components/Layout/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="w-11/12 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/:postId" element={<SinglePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
