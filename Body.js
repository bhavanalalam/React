import {resObj} from "./App";
import { ResCard } from "./ResCard";
import TopBar from './TopBar';
const Body = () => {
  return (
    <div>
      <TopBar />
    <div className="food-grid"  
     style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap", 
        gap: "20px",      
        justifyContent: "center" ,
       
      }}
    >
      {console.log(resObj)}
      {resObj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => {
          return <ResCard key={res.info.id} resObj={res} />;
        }
      )}
    </div>
    </div>
  );
 
};
export default Body;