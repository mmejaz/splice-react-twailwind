import React from "react";
import { Card, Col, Row, Tabs, Table,Form, Input, Select, Button } from "antd";
import {
    SettingOutlined,
    AndroidOutlined,
    BlockOutlined,
    RocketOutlined,
    DockerOutlined,
    CodeSandboxOutlined,
    WalletOutlined,
    DeliveredProcedureOutlined,
    ShopOutlined
} from "@ant-design/icons";

const dataSource = [
    {
        key: "1",
        shipment: "3567758",
        tracking: "7674757657",
        carrier: "Aramex",
        quantity: "12",
        custom: "$238.23",
        delivery: "23/02/2023"
    },
    {
        key: "2",
        shipment: "3567758",
        tracking: "7674757657",
        carrier: "Aramex",
        quantity: "12",
        custom: "$238.23",
        delivery: "23/02/2023"
    },
    {
        key: "3",
        shipment: "3567758",
        tracking: "7674757657",
        carrier: "Aramex",
        quantity: "12",
        custom: "$238.23",
        delivery: "23/02/2023"
    },
    {
        key: "4",
        shipment: "3567758",
        tracking: "7674757657",
        carrier: "Aramex",
        quantity: "12",
        custom: "$238.23",
        delivery: "23/02/2023"
    },
];

const columns = [
    {
        title: "Shipment ID",
        dataIndex: "shipment",
        key: "shipment",
    },
    {
        title: "Tracking No.",
        dataIndex: "tracking",
        key: "tracking",
    },
    {
        title: "Carrier",
        dataIndex: "carrier",
        key: "carrier",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
    },
    {
        title: "Custom Value",
        dataIndex: "custom",
        key: "custom",
    },
    {
        title: "Delivery Date",
        dataIndex: "delivery",
        key: "delivery",
    },
];
const { Option } = Select;
// const [tabPosition, setTabPosition] = useState('right');
// const changeTabPosition = (e) => {
//     setTabPosition(e.target.value);
//   };
const Index = () => (
    <>
        <Row gutter={[16, 16]} className="flex justify-start mt-5">
            <Col xs={24} sm={12} md={12} lg={6}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Package Received</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <CodeSandboxOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">23</h3>
                            <p>Consolidation</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <BlockOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">05</h3>
                            <p>Shipments</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                        <DockerOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">$324</h3>
                            <p>Wallet</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <WalletOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} sm={12} md={12} lg={13} >
                <Card
                    bordered={false}
                    title="Shipping Calculator"
                    className="cursor-pointer mx-2 h-[350px]"
                >
                    <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Destination Country" className="font-bold">
                                <Select bordered={false} className="border-b-stone-400 rounded-none h-[32px]" >
                                    <Option value="can">Canada</Option>
                                    <Option value="aus">Australia</Option>
                                    <Option value="pak">Pakistan</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Destination City" className="font-bold">
                                <Input bordered={false} className="border-b-stone-400 rounded-none h-[32px]" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Zip Code" className="font-bold">
                                <Input bordered={false} className="border-b-stone-400 rounded-none h-[32px]" />
                            </Form.Item>
                        </Col>
                        <Col span={16}>
                            <Form.Item label="Dimensional Weight (inches)*" className="font-bold">
                                <Input placeholder="Length  x  Width  x  Height"  bordered={false} className="border-b-stone-400 rounded-none h-[32px]" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Weight (lbs)*" className="font-bold">
                                <Input  bordered={false} className="border-b-stone-400 rounded-none h-[32px]" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <div>
                                <Button className="w-[100%] rounded-none text-lg font-medium text-white calculate-button mt-4">Calculate Shipping</Button>
                            </div>
                        </Col>
                    </Row>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={11} className="tab-custom">
                <Card bordered={false} className="p-0 h-[350px]">
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane
                            tab={
                                <span className="flex items-center justify-center">
                                    <RocketOutlined  className="text-center"/>
                                    &nbsp; Fastest
                                </span>
                            }
                            key="1"
                        >
                        <div className="flex justify-between mx-3">
                            <img src="../.../../img/dhl-logo.svg" />
                            <div>
                                <span>Economy Parcel</span><br />
                                <span>2 - 5 Days</span>
                            </div>
                            <div className="mt-3 font-semibold">$67.21</div>
                        </div>
                        <hr />
                        <div className="flex justify-between mx-3">
                            <img src="../.../../img/dhl-logo.svg" />
                            <div>
                                <span>Economy Parcel</span><br />
                                <span>2 - 5 Days</span>
                            </div>
                            <div className="mt-3 font-semibold">$67.21</div>
                        </div>
                        <hr />
                        <div className="flex justify-between mx-3">
                            <img src="../.../../img/dhl-logo.svg" />
                            <div>
                                <span>Economy Parcel</span><br />
                                <span>2 - 5 Days</span>
                            </div>
                            <div className="mt-3 font-semibold">$67.21</div>
                        </div>
                        <hr />
                        <div className="flex justify-between mx-3">
                            <img src="../.../../img/dhl-logo.svg" />
                            <div>
                                <span>Economy Parcel</span><br />
                                <span>2 - 5 Days</span>
                            </div>
                            <div className="mt-3 font-semibold">$67.21</div>
                        </div>
                        <hr />
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
                            <div className="flex justify-between mx-3">
                                <img src="../.../../img/dhl-logo.svg" />
                                <div>
                                    <span>Economy Parcel</span><br />
                                    <span>2 - 5 Days</span>
                                </div>
                                <div className="mt-3 font-semibold">$67.21</div>
                            </div>
                            <hr />
                            <div className="flex justify-between mx-3">
                                <img src="../.../../img/dhl-logo.svg" />
                                <div>
                                    <span>Economy Parcel</span><br />
                                    <span>2 - 5 Days</span>
                                </div>
                                <div className="mt-3 font-semibold">$67.21</div>
                            </div>
                            <hr />
                            <div className="flex justify-between mx-3">
                                <img src="../.../../img/dhl-logo.svg" />
                                <div>
                                    <span>Economy Parcel</span><br />
                                    <span>2 - 5 Days</span>
                                </div>
                                <div className="mt-3 font-semibold">$67.21</div>
                            </div>
                            <hr />
                            <div className="flex justify-between mx-3">
                                <img src="../.../../img/dhl-logo.svg" />
                                <div>
                                    <span>Economy Parcel</span><br />
                                    <span>2 - 5 Days</span>
                                </div>
                                <div className="mt-3 font-semibold">$67.21</div>
                            </div>
                            <hr />
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={24}>
                <h3 className="ml-3 mt-3 font-semibold text-lg">Recent Packages</h3>
            </Col>
            <Col xs={24} sm={20} md={24} lg={15} className="custom-table">
                <Card bordered={false} className="cursor-pointer custom-table ml-2">
                    <Table dataSource={dataSource} columns={columns} />;
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} className="mt-13">
                <Card
                    bordered={false}
                    title="US Warehouse Address"
                    className="cursor-pointer h-[360px]"
                >
                    <Tabs defaultActiveKey="1" tabPosition="right" className="vertical-tabs">
                        <Tabs.TabPane
                            tab={
                                <span className="flex items-center justify-center text-white"> Florida</span>
                            }
                            key="1"
                        >
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Name:</div>
                                <div>Splice Packages</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Address:</div>
                                <div>9745 Touchton Road</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Address Line 2:</div>
                                <div>SP-93028032</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">City:</div>
                                <div>Jacksonville</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">State:</div>
                                <div>Florida</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Zip Code:</div>
                                <div>32248</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Phone:</div>
                                <div>(904) 656-2822</div>
                            </div>

                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={
                                <span className="flex items-center justify-center text-white">Delaware </span>
                            }
                            key="2"
                        >
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Name:</div>
                                <div>Splice Packages</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Address:</div>
                                <div>9745 Touchton Road</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Address Line 2:</div>
                                <div>SP-93028032</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">City:</div>
                                <div>Jacksonville</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">State:</div>
                                <div>Florida</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Zip Code:</div>
                                <div>32248</div>
                            </div>
                            <div className="flex mb-3">
                                <div className="font-bold w-[125px]">Phone:</div>
                                <div>(904) 656-2822</div>
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </Col>
        </Row>
    </>
);

export default Index;
