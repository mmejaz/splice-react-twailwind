import React from "react";
import { Card, Col, Row, Tabs, Table } from "antd";
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
            <Card title="Card title" bordered={false}>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        </>
    );
}

export default Index;
