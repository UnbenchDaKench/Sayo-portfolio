import "./App.scss";
import "./fonts.scss";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/Contact",
    element: Contact,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
