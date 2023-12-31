import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CreateAd from "./components/CreateAd/CreateAd";
import TextAd from "./components/TextAd/TextAd";
import MediaAd from "./components/MediaAd/MediaAd";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create" element={<CreateAd />} />
        <Route path="text" element={<TextAd />} />
        <Route path="media" element={<MediaAd />} />
      </Routes>
    </>
  );
}

export default App;
