import "../index.css"
const RestrauntCard = ({
resData
}) => {
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
        }
      />
      <h2>{resData.info.name}</h2>
      <h3>Cuisine: {resData.info.cuisines.join(',')}</h3>
      <h4>Delivery: {resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestrauntCard;