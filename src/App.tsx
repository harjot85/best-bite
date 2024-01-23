import Navbar from "./components/navigation/Navbar";
import wings from "./assets/wings-min.jpg";

function App() {
  return (
    <>
      <Navbar />
    <div>
      <img src={wings} />
    </div>
    </>
  );
}

export default App;
