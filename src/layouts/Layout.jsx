import Footer from "../components/Footer";
import Header from "../components/Header";
import MatrixBackground from "../components/MatrixBG";

const Layout = ({ children }) => {
    
    return (
      <div>
        <MatrixBackground />
        <Header />
            <main>
                {children}
            </main>
        <Footer />
      </div>
    );
  };

  export default Layout;