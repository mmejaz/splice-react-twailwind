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
    ShopOutlined,
    PlusOutlined,
    EditOutlined
} from "@ant-design/icons";

const dataSource1 = [
    {
        key: "1",
        package: "324739",
        vendor: "Amazon",
        tracking: "2978687678979",
        submitted: "23/02/2023",
        action: "View",
    },
    {
        key: "2",
        package: "324739",
        vendor: "Amazon",
        tracking: "2978687678979",
        submitted: "23/02/2023",
        action: "View",
    },
    {
        key: "3",
        package: "324739",
        vendor: "Amazon",
        tracking: "2978687678979",
        submitted: "23/02/2023",
        action: "View",
    },
    {
        key: "4",
        package: "324739",
        vendor: "Amazon",
        tracking: "2978687678979",
        submitted: "23/02/2023",
        action: "View",
    },

];

const columns1 = [
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
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
            <EditOutlined />
        ),
    },
];

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
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
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
                <Card className="h-[400px]">
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">Incoming Packages</h3>
                        <Button className="green-button flex"> <PlusOutlined className="mt-1" /> Add incoming Package</Button>       
                    </div>
                    <div className="incoming-table">
                         <Table className="packages-table-dasboard" dataSource={dataSource1} columns={columns1} />
                    </div>
                </Card>
            </Col>
            <Col  xs={24} sm={12} md={12} lg={11}>
                <Card className="shipment-tracking h-[400px]">
                   <h3 className="font-semibold text-lg mb-5">Shipment Tracking</h3>
                    <Search placeholder="Search by tracking no" className="mb-4" onSearch={onSearch} style={{ width: '100%', }}
                    />
                    <div className="flex justify-between">
                        <div className="mt-5">
                            <span>Showing Result for</span> <br />
                            <span className="text-xl font-semibold">1z657exhkW90890fs</span>
                        </div>
                        <img className="mt-3" src="../.../../img/dhl-logo.svg" />
                    </div>
                    <div className="mt-5">
                        <span>Delivered on:</span> <br />
                        <span className="">wednesday, February 22 at 15:20 at Front door</span>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="">
                            <span>Delivered To:</span> <br />
                            <span className="">JACKSONVILLE, FL US</span>
                        </div>
                        <div className="mt-5">View Details</div>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row gutter={16}>
            <Col span={24}>
                <h3 className="ml-3 mt-3 font-semibold text-lg">Recent Packages</h3>
            </Col>
            <Col xs={24} sm={20} md={24} lg={15} className="custom-table">
                <Card bordered={false} className="cursor-pointer custom-table ml-2">
                    <Table dataSource={dataSource} columns={columns} />
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
