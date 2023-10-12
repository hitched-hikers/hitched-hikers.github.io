import { darkModeAtom, theme } from "./Utils/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import { useAtom } from "jotai";
import { Grommet } from "grommet";
import HikesPage from "./Pages/Hikes/HikesPage";
import AlgonquinPeak from "./Pages/BlogPages/AlgonquinPeak/AlgonquinPeak";
import ThreeDimensionalMap from "./Pages/ThreeDimensionalMap/ThreeDimensionalMap";
import { BlogPath } from "./Enums/blogPath";
import PathOfTheGods from "./Pages/BlogPages/PathOfTheGods/PathOfTheGods";
import PathTheLemons from "./Pages/BlogPages/PathOfTheLemons/PathOfLemons";

function App(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hikes" element={<HikesPage />} />
          <Route path="/3d" element={<ThreeDimensionalMap />} />
          <Route path={BlogPath.AlgonquinPeak} element={<AlgonquinPeak />} />
          <Route path={BlogPath.PathOfTheGods} element={<PathOfTheGods />} />
          <Route path={BlogPath.PathOfTheLemons} element={<PathTheLemons />} />
        </Routes>
      </HashRouter>
    </Grommet>
  );
}

export default App;
