// Recoiljs
import { RecoilRoot } from "recoil";

// Components
import RootLayout from "../layouts/RootLayout";
import Gallery from "../pages/gallery/Gallery";
import About from "../pages/about/About";

// react-router-dom
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route Component={RootLayout} errorElement={"error"} path="/">
      <Route Component={Gallery} index />
      <Route Component={About} path="/about" />
    </Route>
  )
);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
