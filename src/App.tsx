import { darkModeAtom, theme } from "./Utils/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai";
import { Grommet } from "grommet";
import { BlogPath } from "./Enums/blogPath";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./Pages/Home/HomePage"));
const HikesPage = lazy(() => import("./Pages/Hikes/HikesPage"));
const ThreeDimensionalMap = lazy(
  () => import("./Pages/ThreeDimensionalMap/ThreeDimensionalMap")
);
const PathOfTheGods = lazy(
  () => import("./Pages/BlogPages/PathOfTheGods/PathOfTheGods")
);
const PathOfLemons = lazy(
  () => import("./Pages/BlogPages/PathOfTheLemons/PathOfLemons")
);
const AlgonquinPeak = lazy(
  () => import("./Pages/BlogPages/AlgonquinPeak/AlgonquinPeak")
);

function App(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hikes" element={<HikesPage />} />
            <Route path="/3d" element={<ThreeDimensionalMap />} />
            <Route path={BlogPath.AlgonquinPeak} element={<AlgonquinPeak />} />
            <Route path={BlogPath.PathOfTheGods} element={<PathOfTheGods />} />
            <Route path={BlogPath.PathOfTheLemons} element={<PathOfLemons />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Grommet>
  );
}

export default App;
