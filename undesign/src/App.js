import "./style.css";
import { useEffect } from "react";
import MainSection from "./components/MainSection";
import SubmitPage from "./components/SubmitPage";
import UpgradePage from "./components/UpgradePage";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/upgrade" element={<UpgradePage />} />
        <Route path="/item/:itemName" element={<ItemPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
