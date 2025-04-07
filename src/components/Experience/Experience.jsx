import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>

        <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          15+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      </div>

      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span style={{ color: darkMode ? "white" : "" }}>Worked</span>
      </div>
    </div>
  );
};

export default Experience;
