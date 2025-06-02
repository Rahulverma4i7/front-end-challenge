import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Card,
  Typography,
  Alert,
  Divider,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

// Static credentials
const STATIC_CREDENTIALS = {
  manager: {
    username: "manager@example.com",
    password: "manager123",
  },
  shopkeeper: {
    username: "shopkeeper@example.com",
    password: "shopkeeper123",
  },
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    setError(null);

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Validate against static credentials
        const role = values.role;
        const validCredentials = STATIC_CREDENTIALS[role];

        if (
          values.username === validCredentials.username &&
          values.password === validCredentials.password
        ) {
          // Store user data in localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({
              username: values.username,
              role: role,
              name: role === "manager" ? "Manager User" : "Shopkeeper User",
            })
          );

          // Redirect to /main after successful login
          navigate("/main");
        } else {
          setError("Invalid username or password for the selected role");
        }
      } catch (error) {
        setError("Authentication failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card
        style={{
          width: 400,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>Inventory Management System</Title>
        </div>

        {error && (
          <Alert
            message={error}
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
            closable
            onClose={() => setError(null)}
          />
        )}

        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your email"
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select your role!" }]}
          >
            <Select placeholder="Select your role">
              <Select.Option value="manager">Manager</Select.Option>
              <Select.Option value="shopkeeper">Shopkeeper</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <Divider>Test Credentials</Divider>

        <div style={{ marginTop: 16 }}>
          <p>
            <strong>Manager:</strong>
          </p>
          <p>Email: manager@example.com</p>
          <p>Password: manager123</p>

          <p style={{ marginTop: 16 }}>
            <strong>Shopkeeper:</strong>
          </p>
          <p>Email: shopkeeper@example.com</p>
          <p>Password: shopkeeper123</p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
