import Navbar from "./components/Common/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
