import AppIcon from "./AppIcon";
import TitleComponent from "./TitleComponent";
import TitleTagLine from "./TitleTagLine";
const Header = () => {
  return (
    <div className="header" style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "20px" ,
      backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #ddd",
    }}>
      <div className="brand"
      style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}>
        <div>
          <AppIcon />
        </div>
        <div>
          <TitleComponent />
          <TitleTagLine />
        </div>
      </div>
    </div>
  );
};
export default Header;