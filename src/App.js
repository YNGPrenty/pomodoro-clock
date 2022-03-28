import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div className="App">
      <SettingsContext.Provider
        value={{
          showSettings,
          workMinutes,
          breakMinutes,
          setShowSettings,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
