import { darkModeAtom, theme } from "./Utils/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import { useAtom } from "jotai";
import { Grommet } from "grommet";
import HikesPage from "./Pages/Hikes/HikesPage";
import AlgonquinPeak from "./Pages/BlogPages/AlgonquinPeak/AlgonquinPeak";

function App(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hikes" element={<HikesPage />} />
          <Route path="/hikes/algonquin-peak" element={<AlgonquinPeak />} />
        </Routes>
      </HashRouter>
    </Grommet>
  );
}

export default App;
