// import { Space } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import { Button, ConfigProvider, theme } from "antd";

const { darkAlgorithm, defaultAlgorithm } = theme;
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {});
  return (
    <div className="App">
      <Button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Change theme
      </Button>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </ConfigProvider>
    </div>
  );
}
export default App;
