import DaftarKontrakan from "./Components/DaftarKontrakan";
import Navigasi from "./Components/Navigasi";
import Slider from "./Components/Slider";

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen ">
      <Navigasi />
      <Slider />
      <DaftarKontrakan />
    </div>
  );
}

export default Home;
