import "./style.css";
import { useEffect, useState } from "react";
import MainSection from "./components/MainSection";
import SubmitPage from "./components/SubmitPage";
import UpgradePage from "./components/UpgradePage";
import { Routes, Route, useLocation, useLoaderData } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import PageNotFound from "./components/PageNotFound";
import axios from "axios";

export default function App() {
  const [resources, setResources] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState(false);

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/getallresources", { val: 10 })
      .then((res) => {
        setResources(() => {
          if (searchValue) {
            return res.data.filter((item) =>
              item.name.toLowerCase().startsWith(searchValue.toLowerCase())
            );
          } else return [];
        });
      });
    if (searchValue) setDisplay(true);
    else {
      setDisplay(false);
      setResources([]);
    }
  }, [searchValue]);

  useEffect(() => {
    setDisplay(false);
  }, [useLocation().pathname]);

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainSection
              handleSearchChange={handleSearchChange}
              display={display}
              resources={resources}
            />
          }
        />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/upgrade" element={<UpgradePage />} />
        <Route
          path="/item/:itemName"
          element={
            <ItemPage
              handleSearchChange={handleSearchChange}
              display={display}
              resources={resources}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
