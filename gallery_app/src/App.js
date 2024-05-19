import { Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import AlbumsDetails from "./pages/AlbumsDetails";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Albums />} />
      <Route path={"/albums/:albumId/"} element={<AlbumsDetails />} />
    </Routes>
  );
};

export default App;
