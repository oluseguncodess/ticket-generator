import Hero from "./components/hero";
import UploadAvatar from "./components/upload-avatar";
import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <Homepage>
        <Hero/>
        <UploadAvatar/>
      </Homepage>
    </>
  );
}

export default App;
