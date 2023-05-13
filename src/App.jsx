import { RecoilRoot } from "recoil";
import GalleryBox from "./features/GalleryBox";
import SearchBox from "./features/SearchBox";
import RootLayout from "./layouts/RootLayout";

function App() {

  return (
    <RecoilRoot>
      <RootLayout>
        <SearchBox />
        <GalleryBox />
      </RootLayout>
    </RecoilRoot>
  )
}

export default App
