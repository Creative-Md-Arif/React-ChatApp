import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Layout from "./Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login"  element={<Login />}></Route>
        <Route path="/registration"  element={<Registration />}></Route>
        <Route>
        <Route path="/"  element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/chat" element={ <Chat/>}></Route>
        </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
