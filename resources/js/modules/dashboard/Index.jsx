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
const { Option } = Select;
const [tabPosition, setTabPosition] = useState('right');
const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
const Index = () => (
    <>
        <Row gutter={[16, 16]} className="flex justify-start mt-5">
            <Col xs={24} sm={12} md={12} lg={4}>
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
            <Col xs={24} sm={12} md={12} lg={4}>
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
            <Col xs={24} sm={12} md={12} lg={4}>
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
            <Col xs={24} sm={12} md={12} lg={4}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">12</h3>
                            <p>Delivered</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                        <DeliveredProcedureOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={4}>
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
            <Col xs={24} sm={12} md={12} lg={4}>
                <Card bordered={false} className="cursor-pointer mx-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="mb-1 text-2xl">$324</h3>
                            <p>Order</p>
                        </div>
                        <div className="text-4xl bg-sp-dark/20 text-sp-dark rounded-[100%] w-[65px] h-[65px] flex justify-center">
                            <ShopOutlined />
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} sm={12} md={12} lg={9} >
                <Card
                    bordered={false}
                    title="Shipping Calculator"
                    className="cursor-pointer mx-2 h-[320px]"
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
                                <Button className="w-[100%] rounded-none text-lg font-medium text-white calculate-button mt-2">Calculate Shipping</Button>
                            </div>
                        </Col>

                    </Row>
                    </Form>

                    
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} className="tab-custom">
                <Card bordered={false} className="p-0 h-[320px]">
                    <Space
                        style={{
                        marginBottom: 24,
                        }}
                    >
                        Tab position:
                        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                        <Radio.Button value="top">top</Radio.Button>
                        <Radio.Button value="bottom">bottom</Radio.Button>
                        <Radio.Button value="left">left</Radio.Button>
                        <Radio.Button value="right">right</Radio.Button>
                        </Radio.Group>
                    </Space>
                    <Tabs
                        tabPosition={tabPosition}
                        items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab ${id}`,
                        };
                        })}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={7}>
                <Card
                    bordered={false}
                    title="US Warehouse Address"
                    className="cursor-pointer mx-2 h-[320px]"
                >
                    <Tabs defaultActiveKey="1">
                        tabPosition={tabPosition}
                        <Tabs.TabPane
                            tab={
                                <span className="flex items-center justify-center">
                                    <RocketOutlined  className="text-center"/>
                                    &nbsp; Florida
                                </span>
                            }
                            key="1"
                        >
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <AndroidOutlined />
                                    &nbsp; Delaware
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
