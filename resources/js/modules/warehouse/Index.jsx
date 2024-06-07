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
            <Col xs={24} sm={24} md={12} lg={12}>
                <h3 className="mb-1 ml-2 text-lg">Warehouse Address</h3>
                <div className="ml-2 mb-5">You can start shopping away from any US online stores. Use these personal Splice package addresses
                     as the shipping address to make purchases. For Tax-Free Shopping use our Delaware Warehouse Address.
                </div>
                <Card
                    bordered={false}
                    title={
                    <div className="flex justify-between">
                        <span>Warehouse</span>
                        <span>Florida</span>
                        <span>Delaware</span>
                    </div>
                    }
                    className="cursor-pointer mx-2 h-[400px]"
                >
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">Name:</span>
                        <span>Splice Packages LLC</span>
                        <span>Splice Packages LLC</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">Address:</span>
                        <span>9745 Touchton Road</span>
                        <span>100 Business Park Ln,</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">Address line 2:</span>
                        <span>SP-39839923424</span>
                        <span>SP-39839923424</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">City:</span>
                        <span>Jacksonville</span>
                        <span>Milton</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">State:</span>
                        <span>Florida</span>
                        <span>Delaware</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">Zip Code:</span>
                        <span>322456</span>
                        <span>353212</span>
                    </div>
                    <div className="flex justify-between mb-5">
                        <span className="font-bold">Phone:</span>
                        <span>(904) 565-3922</span>
                        <span>(904) 565-3922</span>
                    </div>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="mt-12">
                <img className="mt-12" src="../.../../img/warehouse.png" />
            </Col>
        </Row>
    </>
);

export default Index;
