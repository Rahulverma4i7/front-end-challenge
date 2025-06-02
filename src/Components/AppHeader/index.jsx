import { Typography, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    // Redirect to login page
    navigate("/");
  };

  return (
    <div
      className="AppHeader"
      style={{
        border: "1px solid black",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Typography.Title style={{ margin: 0 }}>Dashboard</Typography.Title>
      <Button
        type="primary"
        danger
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default AppHeader;
