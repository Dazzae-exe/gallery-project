import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/styles/app.css"

const RootLayout = () => {
  return (
    <div className="w-full h-full space-y-8 py-4">
      <Header />
      <main className="w-full h-full flex flex-col gap-y-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
