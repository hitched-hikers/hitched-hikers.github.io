import { darkModeAtom, theme } from "./Utils/Theme";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useAtom } from "jotai";
import { Grommet } from "grommet";
import Hikes from "./Pages/Hikes/Hikes";
import AlgonquinPeak from "./Pages/Hikes/HikeBlogs/AlgonquinPeak";

function App(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hikes" element={<Hikes />} />
          <Route path="/hikes/algonquin-peak" element={<AlgonquinPeak />} />
        </Routes>
      </HashRouter>
    </Grommet>
  );
}

export default App;
