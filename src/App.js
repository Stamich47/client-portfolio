import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Gallerypage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-sm">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
