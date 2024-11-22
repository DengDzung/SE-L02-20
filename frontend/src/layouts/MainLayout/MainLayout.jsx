import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { useState } from "react";
const MainLayout = ({children}) => {
  const [isLeftbarVisible, setIsLeftbarVisible] = useState(true);

  const toggleLeftbar = () => {
    setIsLeftbarVisible((prev) => !prev);
  };

  return (
    <div>
      <Navbar toggleLeftbar={toggleLeftbar} />
      <div style={{ display: "flex" }}>
        <Leftbar isHidden={!isLeftbarVisible} />
        <div style={{ flex: 8 }}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
