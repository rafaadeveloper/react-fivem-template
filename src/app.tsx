import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./views/routes/AdminPage";

export function App() {
  return (
    <main className="w-interface h-interface rounded-[15px] border border-solid border-white/5 bg-background-interface">
      <Routes>
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </main>
  );
}
