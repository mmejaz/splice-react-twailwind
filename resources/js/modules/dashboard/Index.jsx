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

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Profile',
      children: '',
    },
    {
      key: '2',
      label: 'Account Settings',
      children: '',
    },
    {
      key: '3',
      label: 'Password',
      children: '',
    },
    {
        key: '4',
        label: 'Role',
        children: '',
    },
    {
        key: '5',
        label: 'Settings',
        children: '',
    },

  ];

const Index = () => (
    <>
        <Row gutter={[16, 16]} className="flex justify-start mt-5">
            <Col xs={24} sm={24} md={24} lg={24}>
                <h3 className="mb-1 ml-4 text-lg">Profile</h3>
            </Col>
        </Row>

        <Row gutter={[16, 16]} className="flex justify-start mt-5">
            <Col xs={24} sm={12} md={24} lg={24}>
             <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Col>
        </Row>
    </>
);

export default Index;
