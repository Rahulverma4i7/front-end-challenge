import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);

    // Get user role from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUserRole(userData.role);
    }
  }, [location.pathname]);

  // Menu items configuration
  const menuItems = {
    manager: [
      {
        label: "Dashboard",
        icon: <AppstoreOutlined />,
        key: "/dashboardContent",
      },
      {
        label: "Inventory",
        key: "/inventory",
        icon: <ShopOutlined />,
      },
    ],
    shopkeeper: [
      {
        label: "Orders",
        key: "/orders",
        icon: <ShoppingCartOutlined />,
      },
      {
        label: "Customers",
        key: "/customers",
        icon: <UserOutlined />,
      },
      {
        label: "Inventory",
        key: "/inventory",
        icon: <ShopOutlined />,
      },
    ],
  };

  return (
    <div
      className="SideMenu"
      style={{
        height: "100vh",
        backgroundColor: "burlywood",
      }}
    >
      {userRole && (
        <Menu
          style={{
            // height: "100vh",
            backgroundColor: "grey",
          }}
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            navigate("/main" + item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={menuItems[userRole]}
        />
      )}
    </div>
  );
}

export default SideMenu;
