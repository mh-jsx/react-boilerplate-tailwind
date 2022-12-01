import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
// # components
import ErrorBoundary from "./components/common/ErrorBoundary";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AppRouter from "./routes/AppRouter";

// # global styles
import "./styles/App.css";

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
