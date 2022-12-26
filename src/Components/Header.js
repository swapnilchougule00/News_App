import "./Header.css";
import "../index.css";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";

function Header({ themeColorChanger, show }) {

 

  return (
    <div className={`${show ? "dark" : "light"} header  `}>
      <div className="nav">
        <h3>
          Express <span className="mid">India </span>
        </h3>
        
        <button
          className='btn'
          onClick={() => themeColorChanger()}
        >
          {show ? <BsSun /> : <BsMoonStars /> }
        </button>
      </div>
    </div>
  );
}

export default Header;
