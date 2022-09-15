import Sidebar from "./page/Sidebar";
import CardStatus from "./page/CardStatus";
import channels from "./channels";
import Feed from "./page/Feed";

function App() {
  const socialMediaIconsSwitch = (channel) => {
    switch (channel) {
      case "instagrambusiness":
        return channels.instagrambusiness.icon;
      case "facebook":
        return channels.facebook.icon;
      case "twitter":
        return channels.twitter.icon;
      default:
        return channels.instagrambusiness.icon;
    }
  };

  const switchColors = (entryStatuses, status) => {
    switch (status) {
      case 0:
        return entryStatuses[0].color;
      case 1:
        return entryStatuses[1].color;
      case 2:
        return entryStatuses[2].color;
      case 3:
        return entryStatuses[3].color;
      case 4:
        return entryStatuses[4].color;
      default:
        return entryStatuses[0].color;
    }
  };

  const switchActionIcons = (entryStatuses, status) => {
    switch (status) {
      case 0:
        return entryStatuses[0].approve;
      case 1:
        return entryStatuses[1].cancel;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div className="sidebar__container">
        <Sidebar />
      </div>
      <div className="page__container">
        <CardStatus />
        <Feed
          socialMediaIconsSwitch={socialMediaIconsSwitch}
          switchColors={switchColors}
          switchActionIcons={switchActionIcons}
        />
      </div>
    </div>
  );
}

export default App;
