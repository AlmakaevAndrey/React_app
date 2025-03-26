import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<div>main ! component !</div>} />
          <Route path="/addquestion" element={<div>!add question!s</div>} />
          <Route path="/forbidden" element={<div>forbidden !</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
