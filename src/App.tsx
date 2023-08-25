import { darkModeAtom, theme } from "./Utils/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useAtom } from "jotai";
import { Grommet } from "grommet";
import Hikes from "./Pages/Hikes";

function App(): JSX.Element {
    const [darkMode] = useAtom(darkModeAtom);

    return (
        <Grommet theme={theme} full themeMode={darkMode ? "dark" : "light"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hikes" element={<Hikes />} />
                </Routes>
            </BrowserRouter>
        </Grommet>
    );
}

export default App;