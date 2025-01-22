import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}
export default App;

