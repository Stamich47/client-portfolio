import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-sm">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
