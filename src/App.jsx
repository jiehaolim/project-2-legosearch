import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeNavBar from "./pages/Home/HomeNavBar";
import HomePage from "./pages/Home/HomePage";
import HomeSearchResults from "./pages/Home/HomeSearchResults";
import HomeSingleResult from "./pages/Home/HomeSingleResult";
import MinifigsHome from "./pages/Minifigs/MinifigsHome";
import MinifigsSearchResults from "./pages/Minifigs/MinifigsSearchResults";
import MinifigsSingleResult from "./pages/Minifigs/MinifigsSingleResult";
import MyCollection from "./pages/MyCollection/MyCollection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* NavBar for whole website */}
          <Route path="/" element={<HomeNavBar />}>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<HomeSearchResults />} />
            <Route path="result/:setnum" element={<HomeSingleResult />} />

            {/* Minifigs */}
            <Route path="minifigs" element={<MinifigsHome />}>
              <Route path="search" element={<MinifigsSearchResults />} />
              <Route path="result/:setnum" element={<MinifigsSingleResult />} />
            </Route>

            {/* My Collection */}
            <Route path="mycollection" element={<MyCollection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
