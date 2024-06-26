import { Routes, Route } from "react-router-dom";
import { paths } from "./data";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"; 
import NewCardPage from "./pages/NewCardPage";


const AppRoutes = () => {
 
  return (
    <>
      <Routes>
      <Route element={<PrivateRoute />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage />} />
            <Route path={paths.CARD} element={<CardPage />} />
            <Route path={paths.NEWCARD} element={<NewCardPage />} />
          </Route>
        </Route>
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
