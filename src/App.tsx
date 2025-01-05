import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./main-layout";
import { HomePage } from "./home";
import { PrivacyPolicy } from "./privacy-policy";
import { TermsOfUse } from "./terms-of-use";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
