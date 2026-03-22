import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/landing/LandingPage"
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >

        <Route index element={<LandingPage />} />

        <Route path="/restaurants" element={<Home />} />

      </Route>
    </Routes>
  )
}

export default App