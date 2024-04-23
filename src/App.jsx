import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="w-full h-screen grid grid-rows-[200px_auto_1fr_auto]">
      <Navbar />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

export default App;
