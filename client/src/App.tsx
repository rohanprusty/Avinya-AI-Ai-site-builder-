import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";

import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import Preview from "./pages/Preview";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import View from "./pages/View";
import Community from "./pages/Community";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import Settings from "./pages/Settings";
import Loading from "./pages/Loading";

const App = () => {
    const { pathname } = useLocation();

    const hideNavbar =
        (pathname.startsWith("/projects/") && pathname !== "/projects") ||
        pathname.startsWith("/preview/") ||
        pathname.startsWith("/view/");

    return (
        <div>
            <Toaster richColors />
            {!hideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<MyProjects />} />
                <Route path="/preview/:projectId" element={<Preview />} />
                <Route
                    path="/preview/:projectId/:versionId"
                    element={<Preview />}
                />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/projects/:projectId" element={<Projects />} />
                <Route path="/view/:projectId" element={<View />} />
                <Route path="/community" element={<Community />} />
                <Route path="/auth/:pathname" element={<AuthPage />} />
                <Route path="/account/settings" element={<Settings />} />
                <Route path="/loading" element={<Loading />} />
            </Routes>
        </div>
    );
};

export default App;
