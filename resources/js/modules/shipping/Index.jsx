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

const { Option } = Select;

const Index = () => (
    <>

        <Row gutter={[16, 16]} className="flex justify-start mt-5">
            <Col xs={24} sm={24} md={24} lg={24}>
                <h3 className="mb-1 ml-2 text-lg">Shipping Calculator</h3>
            </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-5">
            <Col xs={24} sm={12} md={12} lg={13} >
                <Card
                    bordered={false}
                    title="Shipping Calculator"
                    className="cursor-pointer mx-2 h-[400px]"
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
                        <Col span={18}>
                            <Form.Item label="Dimensional Weight (inches)*" className="font-bold flex">
                                <Input placeholder="Length"  bordered={false} className="border-b-stone-400 rounded-none w-[80px] h-[32px] mx-1" />
                                <Input placeholder="Width"  bordered={false} className="border-b-stone-400 rounded-none w-[80px] h-[32px] mx-1" />
                                <Input placeholder="Height"  bordered={false} className="border-b-stone-400 rounded-none w-[80px] h-[32px] mx-1" />
                                <Input placeholder="Width"  bordered={false} className="border-b-stone-400 rounded-none w-[80px] h-[32px] mx-1" />

                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Unit*" className="font-bold">
                                <Input  bordered={false} className="border-b-stone-400 rounded-none h-[32px]" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <div>
                                <Button className="w-[100%] rounded-none text-lg font-medium text-white calculate-button mt-4">Calculate Shipping</Button>
                            </div>
                        </Col>
                        <Col span={24} className="mt-3">
                            <div>
                                Carriers use the larger of actual and volumetric weights for their rates.
                                Many carriers also round up to next lb or 0.5 kg.
                                The rates displayed are estimates only, and are subject to change without prior notice.
                            </div>
                        </Col>
                    </Row>
                    </Form>
                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={11} className="tab-custom">
                <Card bordered={false} className="p-0 h-[400px]">
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
                        <div className="flex justify-between mx-3">
                            <img src="../.../../img/dhl-logo.svg" />
                            <div>
                                <span>Economy Parcel</span><br />
                                <span>2 - 5 Days</span>
                            </div>
                            <div className="mt-3 font-semibold">$67.21</div>
                        </div>
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
    </>
);

export default Index;
