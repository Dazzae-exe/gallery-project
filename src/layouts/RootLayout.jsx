import SearchContext from "../context/SearchContext";
import { useInitialValue } from "../hooks/useInitialValue";
import Footer from "../pages/Main/Footer";
import Header from "../pages/Main/Header";

const RootLayout = ({ children }) => {
  const { state } = useInitialValue(); 

  return (
    <div className="w-full h-full space-y-8 py-4">
      <Header />
      <SearchContext.Provider value={state.searchTarget}>
        <main className="w-full h-full flex flex-col gap-y-12">{children}</main>
      </SearchContext.Provider>

      <Footer />
    </div>
  );
};

export default RootLayout;
