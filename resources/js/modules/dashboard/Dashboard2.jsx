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
    EditOutlined,
    EyeOutlined,
    DeleteOutlined
} from "@ant-design/icons";
import Chart from "react-apexcharts";

const { Option } = Select;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

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

const dataSource2 = [
    {
        key: "1",
        sr: "01",
        sn: "2349224",
        user: "Ejaz Haneef",
        email: "ejazhaneef@gmail.com",
        action: "View",
    },
    {
        key: "2",
        sr: "02",
        sn: "2349224",
        user: "Ejaz Haneef",
        email: "ejazhaneef@gmail.com",
        action: "View",
    },
    {
        key: "3",
        sr: "03",
        sn: "2349224",
        user: "Ejaz Haneef",
        email: "ejazhaneef@gmail.com",
        action: "View",
    },
    {
        key: "4",
        sr: "04",
        sn: "2349224",
        user: "Ejaz Haneef",
        email: "ejazhaneef@gmail.com",
        action: "View",
    },

];

const columns2 = [
    {
        title: "SR No.",
        dataIndex: "sr",
        key: "sr",
    },
    {
        title: "SN Number",
        dataIndex: "sn",
        key: "sn",
    },
    {
        title: "User Name",
        dataIndex: "user",
        key: "user",
    },
    {
        title: "E-mail",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
            <span>
              <EditOutlined style={{ marginRight: 8 }} />
              <EyeOutlined style={{ marginRight: 8 }} />
              <DeleteOutlined />
            </span>
          ),
    },
];


const state = {
    series: [{
        name: "Aramex",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
        name: "FedEx",
        data: [23, 34, 45, 56, 67, 78, 89, 90, 100]
    }],
    options: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#1f77b4', '#ff7f0e'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }
};


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
            <Col xs={24} sm={12} md={12} lg={14} >
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
            <Col  xs={24} sm={12} md={12} lg={10}>
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
        <Row gutter={16} className="mt-5">
            <Col xs={24} sm={12} md={12} lg={10}>
                <Card>
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">Yearly Shipments</h3>
                        <div>
                        <span>Sort By:</span> <Select className=" border text-black h-[36px] w-[136px]">
                            <Option value="year" className="text-black" >Current Year</Option>
                        </Select>
                        </div>
                    </div>
                    <div>
                        <Chart
                            options={state.options}
                            series={state.series}
                            height= {300}
                        />
                    </div>

                </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={14} >
                <Card className="h-[400px]">
                    <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">User List</h3>
                        <Button className="green-button flex"> <PlusOutlined className="mt-1" /> Add User</Button>
                    </div>
                    <div className="incoming-table">
                         <Table className="packages-table-dasboard" dataSource={dataSource2} columns={columns2} />
                    </div>
                </Card>
            </Col>

        </Row>
    </>
);

export default Index;
