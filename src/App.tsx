import BestBiteApp from "./pages/bestbite-app";
import "@fontsource/chakra-petch";

function App() {
  return (
    <>
      {console.log("isWindows10OrLater", isWindows10OrLater())}
      {!isWindows10OrLater() && (
        <div className="bg-red-500 p-48">Hey this is it! </div>
      )}
      <BestBiteApp />
    </>
  );
}

export default App;

const isWindows10OrLater = () => {
  if (navigator.userAgent) {
    const platformMatch = navigator.userAgent.match(/(Windows NT \d+\.\d+)/i);
    console.log("platformMatch", platformMatch);
    if (platformMatch) {
      const version = parseFloat(platformMatch[0].split(" ")[2]);
      return version >= 10;
    }
  }
  return false;
};
