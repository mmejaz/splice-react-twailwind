import React from "react";
import { Card, Col, Row, Tabs, Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;
function Index() {
    const dataSource = [
        {
            key: "1",
            package: "314321",
            vendor: "Amazon",
            tracking: "9837737837",
            submitted: "23/03/2023",
            action: "View"
        },
        {
            key: "2",
            package: "314321",
            vendor: "Amazon",
            tracking: "9837737837",
            submitted: "23/03/2023",
            action: "View"
        },
        {
            key: "3",
            package: "314321",
            vendor: "Amazon",
            tracking: "9837737837",
            submitted: "23/03/2023",
            action: "View"
        },
        {
            key: "4",
            package: "314321",
            vendor: "Amazon",
            tracking: "9837737837",
            submitted: "23/03/2023",
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
            title: "Tracking No",
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
            dataIndex: "action",
            key: "action",
        },
    ];
    return (
        <>
            <Card title="" bordered={false}>
                <div className="flex justify-end bg-sp-dark rounded-t-lg pr-5 p-3">
                    <Button className=" bg-blue-700 text-white border-0"><PlusOutlined className="mt-1"/>Add Incoming Package</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} className="incoming-packages" />;
            </Card>
        </>
    );
}

export default Index;
