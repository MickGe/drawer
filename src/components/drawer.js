import "./drawer.css";

const Drawer = ({ casesNumber, totalCases, color }) => {
  const setColor = () => {
    console.log("color");
  };
  const handleColor = (evt) => {
    evt.target.style.backgroundColor = color;
    console.log(color);
  };

  return (
    <div className="drawer_container">
      {/* {casesNumber} {totalCases} */}
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
      <div className="case" onClick={handleColor}></div>
    </div>
  );
};

export default Drawer;