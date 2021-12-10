import { Avatar, Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { IoMdNotificationsOutline, IoIosAdd } from "react-icons/io";
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="dashboard-layout-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Row justify="end">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Row>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<IoIosAdd />}>
            New Case
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="header site-layout-background">
          <Row style={{ margin: 0 }}>
            <Col
              span={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="logo">
                <img src="/logo.webp" />
              </div>
            </Col>
            <Col
              span={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <span className="notification-icon">
                <IoMdNotificationsOutline />
              </span>
              <span className="notification-icon">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
              </span>
            </Col>
          </Row>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
