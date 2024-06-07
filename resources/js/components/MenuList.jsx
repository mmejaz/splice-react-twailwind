import {
    HomeFilled,
    AppstoreAddOutlined,
    PayCircleOutlined,
    AreaChartOutlined,
    SettingOutlined,
    BarsOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Menu } from "antd";
function MenuList() {
    const navigate = useNavigate();
    const pageRedirect = (key) => {
        console.log("page key - ", key);
        navigate(key);
    };
    const items = [
        {
            label: "Dashboard",
            type: "group",
            children: [
                {
                    label: "Home",
                    key: "/home",
                    icon: <HomeFilled />,
                },
                {
                    label: "Profile",
                    key: "/profile",
                    icon: <UserOutlined />,
                },
                {
                    label: "Shipping Calculator",
                    key: "/shipping",
                    icon: <PayCircleOutlined />,
                },
                {
                    label: "Warehouse",
                    key: "/Warehouse",
                    icon: <AreaChartOutlined />,
                },
                {
                    label: "Activity",
                    key: "activity",
                    icon: <AppstoreAddOutlined />,
                    children: [
                        {
                            label: "Task1",
                            key: "task1",
                        },
                        {
                            label: "Task2",
                            key: "task2",
                        },
                    ],
                },
                {
                    label: "Incoming Packages",
                    key: "/incomingPackages",
                    icon: <BarsOutlined />,
                },
                {
                    label: "Payment",
                    key: "payment",
                    icon: <PayCircleOutlined />,
                },
                {
                    label: "Progress",
                    key: "progress",
                    icon: <AreaChartOutlined />,
                },
                {
                    label: "Settings",
                    key: "settings",
                    icon: <SettingOutlined />,
                },
                {
                    label: "Charts",
                    key: "charts",
                    icon: <SettingOutlined />,
                },
            ],
        },
    ];
    return (
        <Menu
            theme="dark"
            items={items}
            className="menu-bar px-2"
            mode="inline"
            onClick={(e) => pageRedirect(e.key)}
            defaultSelectedKeys={["/home"]}
            defaultActiveFirst={["/home"]}
        ></Menu>
    );
}

export default MenuList;
