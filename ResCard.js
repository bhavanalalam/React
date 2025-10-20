export const ResCard = (props) => {
  console.log(props);
  return (
    <div className="card" 
      style={{
        width: "220px",
        backgroundColor: "#fff",
        padding: "12px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        transition: "transform 0.2s ease",
        wordWrap: "break-word",
      }}>
      <img
        className="poster"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.resObj.info.cloudinaryImageId
        }
        height="200"
        width="100"
      />
      <div className="meta">
        <strong>{props.resObj.info.name}</strong>
        <p>{props.resObj.info.locality}</p>
        <p>{props.resObj.info.costForTwo}</p>
        <p>{props.resObj.info.areaName}</p>
        <p>{props.resObj.info.cuisines.join(",")}</p>
      </div>
      <div className="rating">★ {props.resObj.info.avgRating}</div>
    </div>
  );
};