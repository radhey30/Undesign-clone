import "./style.css";
import MainSection from "./components/MainSection";
import SubmitPage from "./components/SubmitPage";
import UpgradePage from "./components/UpgradePage";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/upgrade" element={<UpgradePage />} />
          <Route path="/item" element={<ItemPage />} />
        </Routes>
    </>
  );
}
