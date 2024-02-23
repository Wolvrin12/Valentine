import Header from "../components/Header";
import Memories from "../features/Memories/Memories";
import Valentine from "../features/Questionner/Valentine";
import "../styles/App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Memories></Memories>
      <Valentine></Valentine>
    </div>
  );
}

export default App;
