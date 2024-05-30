import React from "react";
import { Card, Col, Row, Tabs, Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Meta } = Card;
function Index() {
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    return (
        <>
            <Card title="" bordered={false}>
                <div className="bg-sp-dark rounded-t-lg p-3">
                    <Button className="flex justify-end"><PlusOutlined className="mt-1"/>Add Incoming Package</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        </>
    );
}

export default Index;
