import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./Logo";
import ThemeSettings from "./ThemeSettings";
import MenuList from "./MenuList";
import ProfilePicture from "./ProfilePicture";
import AppRoutes from "./AppRoutes";
import { Space, Layout, theme, ConfigProvider } from "antd";

const { Header, Sider, Content, Footer } = Layout;

function Index() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100%" }}>
            <Sider collapsed={collapsed} className="sidebar" width={250}>
                <Logo></Logo>
                <MenuList></MenuList>
            </Sider>
            <Layout>
                <Header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        background: colorBgContainer,
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    }}
                >
                    <div>
                        <div
                            onClick={() => setCollapsed(!collapsed)}
                            style={{ cursor: "pointer", fontSize: "20px" }}
                        >
                            {collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )}
                        </div>
                    </div>
                    <div className="ant-layout-header-right">
                        <Space size="middle" className="ant-space-between">
                            <ThemeSettings></ThemeSettings>
                            <ProfilePicture></ProfilePicture>
                        </Space>
                    </div>
                </Header>
                <Content>
                    <div style={{ padding: "10px" }}>
                        <AppRoutes></AppRoutes>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Copyright designed by Muhammad Ejaz
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Index;
