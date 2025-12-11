import { Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Hero from "./pages/hero";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      {/* Always Visible */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Contact />
            </>
          }
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <Contact />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
