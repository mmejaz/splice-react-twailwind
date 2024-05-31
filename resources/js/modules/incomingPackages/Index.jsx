import React, { useState } from "react";
import { Card, Col, Row, Tabs, Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddPackageDrawer from "./AddPackageDrawer";

const { Meta } = Card;

function Index() {

    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const dataSource = [
        {
            key: "1",
            package: "32987329",
            vendor: "Amazon",
            tracking: "2342352345234",
            submitted: "29/02/2023",
            action: "View"
        },
        {
            key: "2",
            package: "32987329",
            vendor: "Amazon",
            tracking: "2342352345234",
            submitted: "29/02/2023",
            action: "View"
        },
        {
            key: "3",
            package: "32987329",
            vendor: "Amazon",
            tracking: "2342352345234",
            submitted: "29/02/2023",
            action: "View"
        },
        {
            key: "4",
            package: "32987329",
            vendor: "Amazon",
            tracking: "2342352345234",
            submitted: "29/02/2023",
            action: "View"
        },
    ];

    const columns = [
        {
            title: "Package ID",
            dataIndex: "package",
            key: "package",
        },
        {
            title: "Vendor Name",
            dataIndex: "vendor",
            key: "vendor",
        },
        {
            title: "Tracking No.",
            dataIndex: "tracking",
            key: "tracking",
        },
        {
            title: "Date Submitted",
            dataIndex: "submitted",
            key: "submitted",
        },
        {
            title: "Action",
            dataIndex: "tracking",
            key: "tracking",
        },
    ];
    return (
        <>
            <Card title="" bordered={false} className="incoming-table">
                <div className="flex justify-end bg-sp-dark rounded-t-lg p-3">
                    <Button className="bg-blue-500 text-white border-0" onClick={showDrawer}><PlusOutlined className="mt-1"/>Add Incoming Package</Button>
                </div>
                <Table className="packages-table " dataSource={dataSource} columns={columns} />
            </Card>
            <AddPackageDrawer visible={drawerVisible} onClose={closeDrawer} />
        </>
    );
}

export default Index;
