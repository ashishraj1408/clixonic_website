import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-white">
      <Header />

      {/* main area grows to push footer to bottom */}
      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
