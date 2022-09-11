import Sidebar from "./components/Sidebar";
import Cards from "./page/Cards";
import CardStatus from "./page/CardStatus";
import data from "./data";

function App() {
  const earlierDate = data.posts_by_date[0];
  return (
    <div className="container">
      <div className="sidebar__container">
        <Sidebar />
      </div>
      <div className="cards__container">
        <CardStatus />
        <Cards />
      </div>
    </div>
  );
}

export default App;
