import React from "react";
import { Card, Col, Row, Tabs, Table } from "antd";
import {
    SettingOutlined,
    AndroidOutlined,
    BlockOutlined,
    RocketOutlined,
    DockerOutlined,
    CodeSandboxOutlined,
    WalletOutlined 
} from "@ant-design/icons";

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

const Index = () => (
    <>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} className="cursor-pointer">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Package Received</p>
                        </div>
                        <div className="text-4xl bg-sp-blue/20 text-sp-blue rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <CodeSandboxOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} className="cursor-pointer">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Consolidation</p>
                        </div>
                        <div className="text-4xl bg-sp-blue/20 text-sp-blue rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <BlockOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} className="cursor-pointer">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Shipments</p>
                        </div>
                        <div className="text-4xl bg-sp-blue/20 text-sp-blue rounded-[100%] w-[65px] h-[65px] flex justify-center">
                        <DockerOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
                <Card bordered={false} className="cursor-pointer">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Wallet</p>
                        </div>
                        <div className="text-4xl bg-sp-blue/20 text-sp-blue rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <WalletOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} sm={12} md={12} lg={12}>
                <Card
                    bordered={false}
                    title="Shipping Calculator"
                    className="cursor-pointer"
                >
                    sdfsdfsd
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} className="tab-custom">
                <Card bordered={false} className="p-0">
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <RocketOutlined />
                                    &nbsp; Fastest
                                </span>
                            }
                            key="1"
                        >
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                pagination={false}
                            />
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <AndroidOutlined />
                                    &nbsp; Cheapest
                                </span>
                            }
                            key="2"
                        >
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                pagination={false}
                            />
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </Col>
           
        </Row>

        <Col xs={24} sm={20} md={24} lg={24} className="custom-table mt-5">
            <h3 className="ml-3 text-1xl">Recent Packages</h3>
            <Card bordered={false} className="cursor-pointer custom-table">
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        </Col>
    </>
);

export default Index;
