import "../../styles/Memories.css";
import Memory from "./Memory";

const Memories = () => {
  return (
    <div className="memories">
      <div className="memories_title">My Favourite Memory: Our beginning:</div>
      <div className="memories_container">
        <Memory></Memory>
      </div>
    </div>
  );
};

export default Memories;
