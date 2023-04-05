import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostListPage } from './pages/PostListPage';
import { SinglePostPage } from './pages/SinglePostPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/:postId" element={<SinglePostPage />} />
      </Routes>
    </BrowserRouter>
  );
};
