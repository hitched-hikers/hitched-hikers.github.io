import { darkModeAtom, theme } from "./Utils/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai";
import { Grommet, Page } from "grommet";
import { BlogPath } from "./Enums/blogPath";
import { Suspense, lazy } from "react";
import styled from "styled-components";
import { PacmanLoader } from "react-spinners";

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
const MamquamFalls = lazy(
  () => import("./Pages/BlogPages/MamquamFalls/MamquamFalls")
);

const LoadingContainer = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <HashRouter>
        <Suspense
          fallback={
            <LoadingContainer background="pageBackground">
              <PacmanLoader color="#6FFFB0" />
            </LoadingContainer>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hikes" element={<HikesPage />} />
            <Route path="/3d" element={<ThreeDimensionalMap />} />
            <Route path={BlogPath.AlgonquinPeak} element={<AlgonquinPeak />} />
            <Route path={BlogPath.PathOfTheGods} element={<PathOfTheGods />} />
            <Route path={BlogPath.PathOfTheLemons} element={<PathOfLemons />} />
            <Route path={BlogPath.MamquamFalls} element={<MamquamFalls />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Grommet>
  );
}

export default App;
