import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostListPage } from './pages/PostListPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import Header from './components/Layout/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="w-11/12 mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<PostListPage />} />
          <Route path="/post/:postId" element={<PostDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
